module.exports = {
  locales: ["us"],
  defaultLocale: "us",
  pages: {
    "*": ["nav", "footer"],
    "/": ["home"],
    "/[page]": ["contact", "projects", "team", "cases", "data", "cookie"]
  }
}
