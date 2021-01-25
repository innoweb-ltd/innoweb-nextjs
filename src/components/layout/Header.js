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
    <header>
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
