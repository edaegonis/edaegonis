import React from "react"

import { useMagicLink } from "../../hooks/use-magic-link"

const AuthWrapper = ({ children }) => {
  const { handleLogin, handleLogout, user } = useMagicLink()

  return (
    <>{React.cloneElement(children, { handleLogin, handleLogout, user })}</>
  )
}

export default AuthWrapper
