const Sitemap = () => {}

export const getServerSideProps = async ({ req, res, locale }) => {
  // FETCH TRANSLATED ROUTES
  const fetchT = locale => require(`../../locales/${locale}/router.json`)

  // GENERATE SOURCE PATHS
  const paths = ["", ...Object.values(fetchT(locale))]

  // GENERATE XML DATA
  const xmlBuilder = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
          ${paths
            .map(
              p => `<url>
            <loc>https://${req.headers.host}/${p}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>`
            )
            .join("")}
      </urlset>`

  res.setHeader("Content-Type", "text/xml")
  res.write(xmlBuilder)
  res.end()

  return { props: {} }
}

export default Sitemap
