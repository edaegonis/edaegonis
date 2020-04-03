import React from "react"

import { useMagicLink } from "../hooks/use-magic-link"

export const Login = () => {
  const { handleLogin, handleLogout, user } = useMagicLink()

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
