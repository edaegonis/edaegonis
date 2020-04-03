import { updateUser, logoutByIssuer } from "./auth"

/* Implement User Endpoints */

/* Implement Get Data Endpoint */
export default (req, res) => {
  if (req.isAuthenticated()) {
    return res
      .status(200)
      .json(req.user)
      .end()
  } else {
    return res.status(401).end(`User is not logged in.`)
  }
}

/* Implement Buy Apple Endpoint */
// router.post("/buy-apple", async (req, res) => {
//   if (req.isAuthenticated()) {
//     updateUser(req.user)
//     return res.status(200).end()
//   } else {
//     return res.status(401).end(`User is not logged in.`)
//   }
// })

// /* Implement Logout Endpoint */
// router.post("/logout", async (req, res) => {
//   if (req.isAuthenticated()) {
//     logoutByIssuer(req.user)
//     req.logout()
//     return res.status(200).end()
//   } else {
//     return res.status(401).end(`User is not logged in.`)
//   }
// })
