import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

// IMPORT UTILS
import { menuSvg, xSvg } from "@utils/svg"
import { isEmpty } from "@utils"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/header.styles.js"

export const Header = () => {
  // HOOKS
  const node = useRef()
  const classes = { ...useStyles(), ...useCommons() }
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // LIFECYCLE
  useEffect(() => {
    addEventListener("scroll", handleScroll, false)
    mobileMenu && addEventListener("mousemove", handleClickOutside, false)
    return () => {
      removeEventListener("scroll", handleScroll, false)
      removeEventListener("mousemove", handleClickOutside, false)
    }
  })

  // HANDLE
  const handleMenuToggle = () => setMobileMenu(!mobileMenu)
  const handleScroll = () => (window.scrollY > 100 ? setScrolled(true) : setScrolled(false))
  const handleClickOutside = e => {
    if (!isEmpty(node.current) && !node.current.contains(e.target)) {
      return setMobileMenu(false)
    }
    return
  }

  // RENDER

  return (
    <header className={scrolled ? classes.headerWrapper : ""}>
      <div className={`${classes.container} ${classes.header}`}>
        <Image
          className={classes.headerLogo}
          src={`${process.env.NEXT_PUBLIC_WEBKIT_URL}/logo-white-50x50_pQ-VJ_nt6lH.png`}
          alt="innoweb logo"
          width={50}
          height={50}
        />
      </div>
    </header>
  )
}

export default Header
