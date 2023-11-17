import Link from "next/link"
import useTranslation from "next-translate/useTranslation"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/footer.styles.js"

export const Footer = () => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }
  const { t } = useTranslation("footer")

  // DATA
  const data = [
    {
      links: false,
      title: t("footer-address-title"),
      data: [t("footer-address-1"), t("footer-address-2")]
    },
    {
      links: false,
      title: t("footer-contact-title"),
      data: [t("footer-contact-email"), t("footer-contact-phone")]
    },
    {
      links: true,
      title: t("footer-information-title"),
      data: [
        { name: t("footer-information-cookie"), link: "/cookie" },
        { name: t("footer-information-data"), link: "/data" }
      ]
    }
  ]

  // RENDER FUNCTIONS
  const renderData = () =>
    data.map(({ title, links, data }, i) => (
      <section key={i} className={classes.footerRowColumn}>
        <h4>{title}</h4>
        <div>
          {links
            ? data.map(({ link, name }, i) => (
                <Link key={i} href={link}>
                  {name}
                </Link>
              ))
            : data.map((y, i) => <p key={i}>{y}</p>)}
        </div>
      </section>
    ))

  // MAIN RENDER
  return (
    <footer className={classes.footer}>
      <div className={`${classes.footerRow} ${classes.container}`}>
        <section className={classes.footerRowColumn}>{t("footer-company-name")}</section>
        {renderData()}
      </div>
    </footer>
  )
}

export default Footer
