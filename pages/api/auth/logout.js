export default (req, res) => {
  const handleLogout = async () => {
    if (req.isAuthenticated() && req.magic) {
      await req.magic.users.logoutByIssuer(req.user.issuer)
      req.logout()
      return res.status(200).end()
    } else {
      return res.status(401).end(`User is not logged in.`)
    }
  }

  handleLogout()
}
