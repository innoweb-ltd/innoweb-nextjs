import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import { locales } from "@i18n"

// IMPORT UTILS
import { fbSvg, igSvg, piSvg, liSvg, twSvg } from "@utils/svg"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/footer.styles.js"

export const Footer = () => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }
  const { t, lang } = useTranslation("footer")

  // DATA
  const data = [
    {
      links: false,
      title: "Archsplace",
      data: ["InnoWeb Ltd.", "Petkov Street 12", "4000 Plovdiv, Bulgaria", "info@archsplace.com"]
    },
    {
      links: true,
      title: t("footer-title-info"),
      data: [{ name: t("footer-sponsor"), link: t("footer-sponsor-link") }]
    },
    {
      links: true,
      title: t("footer-title-company"),
      data: [
        { name: t("footer-terms-conditions"), link: t("footer-terms-conditions-link") },
        { name: t("footer-privacy-policy"), link: t("footer-privacy-policy-link") },
        { name: t("footer-contact"), link: t("footer-contact-link") },
        { name: t("footer-invest"), link: t("footer-invest-link") }
      ]
    },
    {
      links: true,
      title: t("footer-title-follow"),
      data: [
        { name: fbSvg(), link: "https://www.facebook.com/archsplace/" },
        { name: igSvg(), link: "https://www.instagram.com/archsplace_online/" },
        { name: piSvg(), link: "https://www.pinterest.com/archsplace/" },
        { name: liSvg(), link: "https://www.linkedin.com/company/archsplace/" },
        { name: twSvg(), link: "https://twitter.com/archsplace" }
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
                  <a>{name}</a>
                </Link>
              ))
            : data.map((y, i) => <p key={i}>{y}</p>)}
        </div>
        {i === 1 && renderLang()}
      </section>
    ))

  const renderLang = () => {
    return (
      <>
        <h4>{t("footer-lang-title")}</h4>
        <nav className={classes.footerRowColumnLang}>
          {locales.map(lng => (
            <Link href="/" locale={lng} key={lng}>
              <a style={{ opacity: lng === lang ? ".5" : "1", cursor: lng === lang ? "default" : "pointer" }}>{lng}</a>
            </Link>
          ))}
        </nav>
      </>
    )
  }

  // MAIN RENDER
  return (
    <footer className={classes.footer}>
      <div className={classes.footerRow}>{renderData()}</div>
    </footer>
  )
}

export default Footer
