import { useState, useCallback } from "react"
import { Magic } from "magic-sdk"

const apiKey = "pk_test_FAC7D9F50A43C7B0"

export const useMagicLink = () => {
  const [user, setUser] = useState(false)

  if (typeof window !== "undefined") {
    const magic = new Magic(apiKey)

    const resolveUser = useCallback(async function resolveUser() {
      const isLoggedIn = await magic.user.isLoggedIn()

      console.log(isLoggedIn)
      if (isLoggedIn) {
        /* Get user metadata including email */
        const user = await magic.user.getMetadata()
        console.log(user)

        setUser(user)
      }
    }, [])

    /* 4️⃣ Implement Login Handler */
    const handleLogin = async e => {
      e.preventDefault()
      const email = new FormData(e.target).get("email")
      if (email) {
        /* One-liner login 🤯 */
        const idk = await magic.auth.loginWithMagicLink({ email })
        console.log(idk)
        resolveUser()
      }
    }

    const handleLogout = () => {
      console.log("logging out...")
    }

    return { user, handleLogin, handleLogout }
  }

  return { user: false, handleLogin: false, handleLogout: false }
}
