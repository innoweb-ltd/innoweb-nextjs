// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/contact/contact.styles.js"

const Contact = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <h1>{t("contact-hero-title")}</h1>
        <p>{t("contact-text-1")}</p>
        <p>{t("contact-email")}</p>
        <p>{t("contact-phone")}</p>
      </section>
    </main>
  )
}

export default Contact
