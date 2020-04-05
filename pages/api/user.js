export default (req, res) => {
  console.log(req.magic)
  if (req.isAuthenticated()) {
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ user: req.user }))
  } else {
    res.statusCode = 401
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ message: "User is not logged in." }))
  }
}
