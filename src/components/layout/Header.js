import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

// IMPORT COMPONENTS
import HeaderMenu from "./HeaderMenu"
import { logoSvg } from "../../utils/svg"

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
          <a className={classes.headerLogo}>{logoSvg()}</a>
        </Link>
        <HeaderMenu classes={classes} data={data} t={t} />
      </div>
    </header>
  )
}

export default Header
