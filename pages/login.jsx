import React from "react"

import { useMagicLink } from "../hooks/use-magic-link"

const Login = ({ magic }) => {
  const { handleLogin, handleLogout, user, isLoading } = useMagicLink(magic)

  if (isLoading) return <h3>Loading...</h3>

  return user ? (
    <>
      <h1>Current user: ${user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <>
      <h1>Please sign up or login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default Login
