// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/contact/contact.styles.js"

const Contact = ({ t, path }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  return (
    <main className={classes.main}>
      <section className={`${classes.mainContent} ${classes.container}`}>
        <h1>{t(`${path}-hero-title`)}</h1>
        <p>{t(`${path}-text-1`)}</p>
      </section>
    </main>
  )
}

export default Contact
