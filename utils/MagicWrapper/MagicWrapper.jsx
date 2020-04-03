import React, { useEffect, useState } from "react"
import { Magic } from "magic-sdk"

const apiKey = "pk_test_FAC7D9F50A43C7B0"

const AuthWrapper = ({ children }) => {
  const [magic, setMagic] = useState(false)

  useEffect(() => {
    const magic = new Magic(apiKey)

    setMagic(magic)
  }, [setMagic])

  return <>{React.cloneElement(children, { magic })}</>
}

export default AuthWrapper
