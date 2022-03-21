import Image from "next/image"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/info/info.styles.js"

const Cases = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  // DATA
  const cases = [
    {
      link: "https://www.acmdesign.dk",
      img: "/images/acmdesign.png",
      alt: "acmdesign website",
      name: "Guldsmed Anders Mørck ApS",
      domain: "www.acmdesign.dk",
      front: "Nextjs",
      back: "Wordpress",
      text: "case-text-acmdesign"
    },
    {
      link: "https://www.zederkop.dk",
      img: "/images/zederkop.png",
      alt: "acmdesign website",
      name: "Zederkop ApS",
      domain: "www.zederkop.dk",
      front: "Nextjs",
      back: "Wordpress",
      text: "case-text-zederkop"
    },
    {
      link: "https://www.elstyrken.dk/",
      img: "/images/elstyrken.png",
      alt: "elstyrken website",
      name: "Elstyrken A/S",
      domain: "www.elstyrken.dk",
      front: "Squarespace",
      back: "Squarespace",
      text: "case-text-elstyrken"
    }
  ]

  // MAIN RENDER
  return (
    <main className={classes.main}>
      <section className={`${classes.mainHero} ${classes.container}`}>
        <h1>{t("cases-hero-title")}</h1>
        <p>{t("cases-hero-subtitle")}</p>
      </section>
      <section className={`${classes.mainContent} ${classes.container}`}>
        {cases.map(({ link, img, alt, name, domain, front, back, text }, i) => {
          return (
            <div className={classes.mainContentRow} key={i}>
              <div className={`${classes.mainContentColumn} ${classes.boxShadow}`}>
                <a target="_blank" href={t(link)} className={classes.mainContentColumnImage}>
                  <Image src={img} width="400px" height="226px" alt={alt} />
                </a>
              </div>
              <div className={classes.mainContentColumn}>
                <h2>{name}</h2>
                <p>
                  <a target="_blank" href={link}>
                    {domain}
                  </a>
                </p>
                <p>
                  {t("cases-frontend")}
                  {front}
                </p>
                <p>
                  {t("cases-backend")}
                  {back}
                </p>
                <p>
                  {t("cases-description")}
                  {t(text)}
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Cases
