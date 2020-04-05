import passport from "passport"

export default function (req, res) {
  const handleAuthentication = async () => {
    try {
      console.log("logging in;..")
      const user = await new Promise((resolve, reject) => {
        passport.authenticate("magic", function (error, user, info) {
          if (error || info) {
            reject(error)
          }

          if (user) {
            resolve(user)
          }
        })(req, res)
      })

      req.login(user, (err) => {
        if (err) {
          res.status(500).json({ message: "Session save went bad." })
        }
        console.log("---123456789098765432345678---", req.user)

        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify({ user }))
      })
    } catch (e) {
      throw e
    }
  }
  console.log("handling...")
  handleAuthentication()
}
