// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/info/info.styles.js"

const Team = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainHero} ${classes.container}`}>
        <h1>{t("team-hero-title")}</h1>
        <p>{t("team-hero-subtitle")}</p>
      </section>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <div className={classes.mainContentRow}>
          <div className={classes.mainContentColumn}>
            <h2>{t("team-person-1-name")}</h2>
            <p>{t("team-person-1-text")}</p>
            <p>{t("team-person-1-linkedin")}</p>
            <p>{t("team-person-1-github")}</p>
          </div>
          <div className={classes.mainContentColumn}>
            <h2>{t("team-person-2-name")}</h2>
            <p>{t("team-person-2-text")}</p>
            <p>{t("team-person-2-linkedin")}</p>
            <p>{t("team-person-2-github")}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team
