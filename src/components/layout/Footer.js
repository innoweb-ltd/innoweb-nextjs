import Link from "next/link"
import useTranslation from "next-translate/useTranslation"
import { locales } from "@i18n"

// IMPORT UTILS
import { fbSvg, igSvg, piSvg, liSvg, twSvg } from "@utils/svg"

// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/layout/footer.styles.js"

export const Footer = () => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }
  const { t, lang } = useTranslation("footer")

  // MAIN RENDER
  return (
    <footer>
      hello world
    </footer>
  )
}

export default Footer
