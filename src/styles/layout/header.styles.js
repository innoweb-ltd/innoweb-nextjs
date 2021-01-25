import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  header: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem"
  },
  headerLogo: {
    filter: "invert(1)",
    contain: "content"
  }
})
