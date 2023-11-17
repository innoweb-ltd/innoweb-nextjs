import Image from "next/image"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/info/info.styles.js"

const Projects = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainHero} ${classes.container}`}>
        <h1>{t("projects-hero-title")}</h1>
        <p>{t("projects-hero-subtitle")}</p>
      </section>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <div className={classes.mainContentRow}>
          <div className={`${classes.mainContentColumn} ${classes.boxShadow}`}>
            <a target="_blank" href={t("projects-project-1-link")} className={classes.mainContentColumnImage}>
              <Image src="/images/archsplace.png" width={400} height={234} alt="archsplace website" />
            </a>
          </div>
          <div className={classes.mainContentColumn}>
            <h2>{t("projects-project-1-name")}</h2>
            <p>
              <a target="_blank" href={t("projects-project-1-link")}>
                {t("projects-project-1-domain")}
              </a>
            </p>
            <p>
              {t("projects-frontend")}
              {t("projects-project-1-frontend")}
            </p>
            <p>
              {t("projects-backend")}
              {t("projects-project-1-backend")}
            </p>
            <p>
              {t("projects-description")}
              {t("projects-project-1-text-1")}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
