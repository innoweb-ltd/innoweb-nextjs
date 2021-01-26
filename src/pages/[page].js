import useTranslation from "next-translate/useTranslation"
import getT from "next-translate/getT"
import Head from "next/head"

// COMPONENTS
import Contact from "@components/info/contact"
import Projects from "@components/projects"

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
      {path === "projects" && <Projects t={t} locale={locale} />}
      {path === "contact" && <Contact t={t} locale={locale} />}
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
