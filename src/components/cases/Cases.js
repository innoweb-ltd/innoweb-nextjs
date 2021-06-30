import Image from "next/image"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/info/info.styles.js"

const Cases = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainHero} ${classes.container}`}>
        <h1>{t("cases-hero-title")}</h1>
        <p>{t("cases-hero-subtitle")}</p>
      </section>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <div className={classes.mainContentRow}>
          <div className={`${classes.mainContentColumn} ${classes.boxShadow}`}>
            <a target="_blank" href={t("cases-project-1-link")} className={classes.mainContentColumnImage}>
              <Image src="/images/acmdesign.png" width="400px" height="226px" alt="acmdesign website" />
            </a>
          </div>
          <div className={classes.mainContentColumn}>
            <h2>{t("cases-project-1-name")}</h2>
            <p>
              <a target="_blank" href={t("cases-project-1-link")}>
                {t("cases-project-1-domain")}
              </a>
            </p>
            <p>
              {t("cases-frontend")}
              {t("cases-project-1-frontend")}
            </p>
            <p>
              {t("cases-backend")}
              {t("cases-project-1-backend")}
            </p>
            <p>
              {t("cases-description")}
              {t("cases-project-1-text-1")}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cases
