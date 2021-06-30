import useTranslation from "next-translate/useTranslation"
import getT from "next-translate/getT"
import Head from "next/head"

// COMPONENTS
import Contact from "@components/contact/Contact"
import Cases from "@components/cases/Cases"
import Projects from "@components/projects/Projects"
import Team from "@components/team/Team"
import Legal from "@components/legal/Legal"

const Page = ({ path, locale }) => {
  // HOOKS
  const { t } = useTranslation(path)

  // RENDER PAGE
  return (
    <>
      <Head>
        <title>{t(`${path}-page-title`)}</title>
        <meta name="description" content={t(`${path}-meta-desc`)} />
      </Head>
      {path === "cases" && <Cases t={t} locale={locale} />}
      {path === "projects" && <Projects t={t} locale={locale} />}
      {path === "contact" && <Contact t={t} locale={locale} />}
      {path === "team" && <Team t={t} locale={locale} />}
      {(path === "data" || path === "cookie") && <Legal t={t} locale={locale} path={path} />}
    </>
  )
}

export const getStaticPaths = ({ locales }) => {
  // GET TRANSLATIONS
  const fetchT = locale => require(`../../locales/${locale}/router.json`)
  // BUILD PATHS
  const paths = locales.map(locale => Object.values(fetchT(locale)).map(page => ({ params: { page }, locale }))).flat()
  return { paths, fallback: false }
}

export const getStaticProps = async ({ locale, params: { page } }) => {
  // DEFINE PAGE
  const t = await getT(locale, "router")
  const router = require(`../../locales/${locale}/router.json`)
  // CHECK PAGE
  const path = Object.keys(router).find(p => t(p) === page)
  return { props: { locale, path } }
}

export default Page
