const express = require("express")
const next = require("next")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const logger = require("morgan")

const Datastore = require("nedb-promise")
let users = new Datastore({ filename: "users.db", autoload: true })

/* Setup Magic Admin SDK */
const { Magic } = require("@magic-sdk/admin")
const magic = new Magic("sk_test_B042E016DBF5BEC8")

/* Implement Auth Strategy */
const passport = require("passport")
const MagicStrategy = require("passport-magic").Strategy

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.set("trust proxy", 1)

  server.use(logger("dev"))
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(cookieParser())

  server.use(
    session({
      secret: "go horse mode",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        sameSite: true,
      },
    })
  )

  /* Implement Session Behavior */

  /* Defines what data are stored in the user session */
  passport.serializeUser((user, done) => {
    done(null, user.issuer)
  })

  /* Populates user data in the req.user object */
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await users.findOne({ issuer: id })
      done(null, user)
    } catch (err) {
      done(err, null)
    }
  })

  server.use(passport.initialize())
  server.use(passport.session())

  const strategy = new MagicStrategy(async function (user, done) {
    const userMetadata = await magic.users.getMetadataByIssuer(user.issuer)
    const existingUser = await users.findOne({ issuer: user.issuer })
    if (!existingUser) {
      /* Create new user if doesn't exist */
      return signup(user, userMetadata, done)
    } else {
      /* Login user if otherwise */
      return login(user, done)
    }
  })

  passport.use(strategy)

  /* Implement Auth Behaviors */

  /* Implement User Signup */
  const signup = async (user, userMetadata, done) => {
    let newUser = {
      issuer: user.issuer,
      email: userMetadata.email,
      lastLoginAt: user.claim.iat,
    }
    await users.insert(newUser)
    return done(null, newUser)
  }

  /* Implement User Login */
  const login = async (user, done) => {
    /* Replay attack protection (https://go.magic.link/replay-attack) */
    if (user.claim.iat <= user.lastLoginAt) {
      return done(null, false, {
        message: `Replay attack detected for user ${user.issuer}}.`,
      })
    }
    await users.update(
      { issuer: user.issuer },
      { $set: { lastLoginAt: user.claim.iat } }
    )
    return done(null, user)
  }

  server.all("*", (req, res) => {
    req.magic = magic
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
