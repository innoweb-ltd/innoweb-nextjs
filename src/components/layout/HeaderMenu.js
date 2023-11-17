import { useState } from "react"
import Link from "next/link"

// IMPORT COMPONENTS
import { menuSvg, xSvg } from "../../utils/svg"

const HeaderMenu = ({ classes, t, data }) => {
  // HOOKS
  const [toggle, setToggle] = useState(false)

  // HANDLERS
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const closeToggle = () => {
    setToggle(false)
  }

  // RENDER FUNCTIONS
  const renderFirstNav = () =>
    data.map((obj, i) => (
      <Link href={t(obj[1])} key={i} onClick={closeToggle}>
        <p>{t(obj[0])}</p>
      </Link>
    ))

  // MAIN RENDER
  return (
    <div>
      <div className={classes.headerLowerBtn} onClick={handleToggle}>
        {menuSvg()}
      </div>
      <div className={!toggle ? `${classes.headerLowerNav}` : `${classes.headerLowerNav} ${classes.headerLowerNavShow}`}>
        <div className={classes.headerLowerNavMenus}>
          <nav className={classes.headerLowerNavMenu}>{renderFirstNav()}</nav>
        </div>
        {toggle && (
          <div className={classes.headerLowerNavClose} onClick={handleToggle}>
            <div>{xSvg()}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderMenu
