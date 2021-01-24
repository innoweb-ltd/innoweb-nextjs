import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

// COMPONENTS

const HomePage = () => {
  // HOOKS
  const { t } = useTranslation("home")

  // RENDER
  return (
    <>
      <Head>
        <title>{t("home-page-title")}</title>
        <meta name="description" content={t("home-meta-desc")} />
      </Head>
    </>
  )
}

export default HomePage
