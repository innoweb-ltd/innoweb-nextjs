import Document, { Html, Head, Main, NextScript } from "next/document"

// IMPORT TRACKING
import { GA_TRACKING_ID } from "@utils"

// IMPORT STYLING
import { jss, SheetsRegistry, JssProvider, createGenerateId } from "react-jss"
import { defaultStyles } from "@styles/common/default.styles.js"

const defaultJss = jss.createStyleSheet(defaultStyles)

class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          (
            <JssProvider jss={jss} registry={registry} generateId={generateId}>
              <App {...props} hostname={ctx.req.headers.host} />
            </JssProvider>
          )
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="reset-css">{defaultJss.toString()}</style>
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      )
    }
  }
  render() {
    return (
      <Html translate="no">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap" rel="stylesheet" />
          <meta name="robots" content={process.env.NEXT_PUBLIC_HOSTNAME.split(".").includes("herokuapp") ? "noindex, nofollow" : "index, follow"} />
          <meta name="google-site-verification" content="5yEPj5mmZTCccU13Y_Fn_kKRh6DwEOy4EkKnpZhUE5E" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date())
                gtag('config', '${GA_TRACKING_ID}', {
                  pagePath: window.location.pathname,
                  pageTitle: window.document.title
                })
              `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default JssDocument
