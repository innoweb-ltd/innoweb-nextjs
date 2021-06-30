// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/projects/projects.styles.js"

const Projects = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <h1>{t("projects-hero-title")}</h1>
        <p>{t("projects-hero-subtitle")}</p>
        <div>
          <p>{t("projects-project-1-title")}</p>
          <p>{t("projects-project-1-text-1")}</p>
          <p>{t("projects-project-1-text-2")}</p>
        </div>
      </section>
    </main>
  )
}

export default Projects
