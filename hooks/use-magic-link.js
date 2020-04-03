import { useState, useCallback, useEffect } from "react"

/**
 * Immediately resolves the user if he's a returning user
 * also exposes functions to handle magic link authentication
 *
 * @param {Object} magic The magic instance
 */
export const useMagicLink = magic => {
  const [user, setUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Uses magic to retrieve logged in user,
   * and then sets the current user state
   */
  const resolveUser = useCallback(
    async function() {
      if (!magic) return true

      setIsLoading(true)
      const res = await fetch("/api/user")
      console.log(res)

      if (res.status === 200) {
        let userData = await res.json()
        console.log(userData)
      } else {
        setUser(false)
      }

      // const isLoggedIn = await magic.user.isLoggedIn()

      // if (isLoggedIn) {
      //   /* Get user metadata including email */
      //   const user = await magic.user.getMetadata()

      //   setUser(user)
      // } else {
      //   setUser(false)
      // }
      setIsLoading(false)
    },
    [magic, setUser]
  )

  /** Make sure to resolve the user on component mounting */
  useEffect(() => {
    resolveUser()
  }, [resolveUser])

  /* Handler for logging in */
  const handleLogin = async e => {
    e.preventDefault()
    const email = new FormData(e.target).get("email")

    // if (email) {
    //   await magic.auth.loginWithMagicLink({ email })

    //   /** Update the logged in user */
    //   resolveUser()
    // }

    if (email) {
      const didToken = await magic.auth.loginWithMagicLink({ email })

      await fetch(`/api/auth`, {
        headers: new Headers({
          Authorization: "Bearer " + didToken
        }),
        withCredentials: true,
        credentials: "same-origin",
        method: "POST"
      })

      resolveUser()
    }
  }

  /** Handler for logging out */
  const handleLogout = async () => {
    await magic.user.logout()
    resolveUser()
  }

  return { user, handleLogin, handleLogout, isLoading }
}
