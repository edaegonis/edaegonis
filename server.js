const express = require("express")
const next = require("next")
const session = require("express-session")
const passport = require("passport")

const userRouter = require("./server/user")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

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

  server.all("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
