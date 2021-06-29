import Link from "next/link"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

// IMPORT COMPONENTS
import HeaderMenu from "./HeaderMenu"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/header.styles.js"

const Header = () => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }
  const { t } = useTranslation("nav")

  // DATA
  const data = [
    ["nav-home-name", "nav-home-link"],
    ["nav-cases-name", "nav-cases-link"],
    ["nav-projects-name", "nav-projects-link"],
    ["nav-team-name", "nav-team-link"],
    ["nav-contact-name", "nav-contact-link"]
  ]

  // MAIN RENDER
  return (
    <header className={classes.header}>
      <div className={`${classes.headerRow} ${classes.container}`}>
        <Link href="/">
          <a>
            <Image
              className={classes.headerLogo}
              src={`${process.env.NEXT_PUBLIC_WEBKIT_URL}/logo-white-50x50_pQ-VJ_nt6lH.png`}
              alt="innoweb logo"
              width={50}
              height={50}
            />
          </a>
        </Link>
        <HeaderMenu classes={classes} data={data} t={t} />
      </div>
    </header>
  )
}

export default Header
