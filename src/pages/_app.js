import { useEffect } from "react"
import { useRouter } from "next/router"

// IMPORT TRACKING
import { pageview } from "@utils"

// IMPORT COMPONENT
import Header from "@components/layout/Header"
import Footer from "@components/layout/Footer"

const AppComponent = ({ Component, pageProps }) => {
  // HOOKS
  const router = useRouter()

  // LIFECYLE
  useEffect(() => {
    const style = document.getElementById("server-side-styles")
    style && style.parentNode.removeChild(style)
  }, [])

  useEffect(() => {
    const handleRouteChange = url => pageview(url)
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default AppComponent
