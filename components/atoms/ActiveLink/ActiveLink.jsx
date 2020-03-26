import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const ActiveLink = ({ children, ...props }) => {
  const router = useRouter()
  const child = React.Children.only(children)

  return (
    <Link {...props}>
      <span>
        {React.cloneElement(child, { active: router.pathname === props.href })}
      </span>
    </Link>
  )
}
