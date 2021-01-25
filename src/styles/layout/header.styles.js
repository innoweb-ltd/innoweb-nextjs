import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  headerWrapper: {
    backgroundColor: "white",
    transition: "all 0.5s ease",
    "& $headerLogo": {
      filter: "invert(1)"
    }
  },
  header: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem"
  },
  headerLogo: {
    contain: "content"
  }
})
