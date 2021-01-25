import Image from "next/image"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/landings/home.styles.js"

const Home = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.home}>
      <div className={classes.container}>
        <h1>{t("home-title")}</h1>
        <h2>{t("home-subtitle")}</h2>
      </div>
    </main>
  )
}

export default Home
