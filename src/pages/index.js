import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

// COMPONENTS
import Home from "@components/landing/home"

const HomePage = () => {
  // HOOKS
  const { t } = useTranslation("home")
  console.log(t("home-page-title"))
  // RENDER
  return (
    <>
      <Head>
        <title>{t("home-page-title")}</title>
        <meta name="description" content={t("home-meta-desc")} />
      </Head>
      <Home t={t} />
    </>
  )
}

export default HomePage
