const express = require("express")
const next = require("next")
const session = require("express-session")
const passport = require("passport")
const cookieParser = require("cookie-parser")

const userRouter = require("./server/user")
const authRouter = require("./server/auth").router

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.set("trust proxy", 1)
  server.use(express.urlencoded({ extended: false }))
  server.use(cookieParser())

  server.use(express.json())
  server.use(
    session({
      secret: "go horse mode",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60 * 60 * 1000, // 1 hour
        secure: true,
        sameSite: true
      }
    })
  )
  server.use(passport.initialize())
  server.use(passport.session())

  server.use("/user", userRouter)
  server.use("/auth", authRouter)

  server.post("/working", (req, res) => {
    console.log("working")
  })

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
