import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// IMPORT COMPONENTS
import Nav from "./Nav"

// IMPORT UTILS
import { menuSvg, xSvg, archsplaceSvg } from "@utils/svg"
import { isEmpty } from "@utils"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/header.styles.js"

export const Header = () => {
  // HOOKS
  const node = useRef()
  const classes = { ...useStyles(), ...useCommons() }
  const [mobileMenu, setMobileMenu] = useState(false)

  // HANDLE
  const handleMenuToggle = () => setMobileMenu(!mobileMenu)
  const handleClickOutside = e => {
    if (!isEmpty(node.current) && !node.current.contains(e.target)) {
      return setMobileMenu(false)
    }
    return
  }
  useEffect(() => {
    mobileMenu && addEventListener("mousemove", handleClickOutside, false)
    return () => {
      removeEventListener("mousemove", handleClickOutside, false)
    }
  })

  // RENDER
  return (
    <header className={classes.header}>
      HELLO WORLD
    </header>
  )
}

export default Header
