const path = require("path")
const nextTranslate = require("next-translate-plugin")

module.exports = nextTranslate({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "innoweb.ltd",
        pathname: "**"
      }
    ],
    deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  env: {
    NEXT_PUBLIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME,
    NEXT_PUBLIC_WEBKIT_URL: process.env.NEXT_PUBLIC_WEBKIT_URL
  },
  i18n: {
    locales: ["us"],
    defaultLocale: "us",
    localeDetection: false,
    domains: [
      {
        domain: "www.innoweb.ltd",
        defaultLocale: "us"
      }
    ]
  },
  poweredByHeader: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // ALIAS GENERATOR
    config.resolve.alias["@actions"] = path.resolve(__dirname, "./src/store/actions")
    config.resolve.alias["@utils"] = path.resolve(__dirname, "./src/utils")
    config.resolve.alias["@components"] = path.resolve(__dirname, "./src/components")
    config.resolve.alias["@styles"] = path.resolve(__dirname, "./src/styles")
    config.resolve.alias["@i18n"] = path.resolve(__dirname, "./i18n")

    return config
  }
})
