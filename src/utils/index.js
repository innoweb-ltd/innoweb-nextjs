// EXPORTED FUNCTIONS
export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0)

export const imageRender = (image, size) => {
  return image.split("/")[1].includes("avatars") ? `${process.env.REACT_APP_WEBKIT_URL}${image}/${size}` : image
}

// TRACKING FUNCTIONS
export const GA_TRACKING_ID = "GTM-KC6PD84"
export const pageview = url => window.gtag("config", GA_TRACKING_ID, { pagePath: url, pageTitle: document.title })
export const event = ({ action, category, label, value }) =>
  window.gtag("event", action, { eventCategory: category, eventLabel: label, value: value })
