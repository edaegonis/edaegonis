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

      const isLoggedIn = await magic.user.isLoggedIn()

      console.log(isLoggedIn)
      if (isLoggedIn) {
        /* Get user metadata including email */
        const user = await magic.user.getMetadata()
        console.log(user)

        setUser(user)
      }
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

    if (email) {
      await magic.auth.loginWithMagicLink({ email })

      /** Update the logged in user */
      resolveUser()
    }
  }

  const handleLogout = () => {
    console.log("logging out...")
  }

  return { user, handleLogin, handleLogout, isLoading }
}
