// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/cases/cases.styles.js"

const Cases = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <h1>{t("cases-hero-title")}</h1>
        <p>{t("cases-hero-subtitle")}</p>
        <div>
          <p>{t("cases-project-1-title")}</p>
          <p>{t("cases-project-1-text-1")}</p>
        </div>
      </section>
    </main>
  )
}

export default Cases
