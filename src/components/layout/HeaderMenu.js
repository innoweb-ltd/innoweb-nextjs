import { useState } from "react"
import Link from "next/link"

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
      <Link href={t(obj[1])} key={i}>
        <a onClick={closeToggle}>
          <p>{t(obj[0])}</p>
        </a>
      </Link>
    ))

  // MAIN RENDER
  return (
    <div className={classes.headerLower}>
      <div className={classes.headerLowerBtn} onClick={handleToggle}>
        <div>Menu</div>
      </div>
      <div className={!toggle ? `${classes.headerLowerNav}` : `${classes.headerLowerNav} ${classes.headerLowerNavShow}`}>
        <div className={classes.headerLowerNavMenus}>
          <nav className={classes.headerLowerNavMenu}>{renderFirstNav()}</nav>
        </div>
        {toggle && (
          <div className={classes.headerLowerNavClose} onClick={handleToggle}>
            <span>Close</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderMenu
