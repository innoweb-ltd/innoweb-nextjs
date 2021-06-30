// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/team/team.styles.js"

const Team = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <h1>{t("team-hero-title")}</h1>
        <div>
          <h2>{t("team-person-1-name")}</h2>
          <p>{t("team-person-1-text")}</p>
          <p>{t("team-person-1-linkedin")}</p>
          <p>{t("team-person-1-github")}</p>
        </div>
        <div>
          <h2>{t("team-person-2-name")}</h2>
          <p>{t("team-person-2-text")}</p>
          <p>{t("team-person-2-linkedin")}</p>
          <p>{t("team-person-2-github")}</p>
        </div>
      </section>
    </main>
  )
}

export default Team
