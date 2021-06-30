import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  main: {
    zIndex: 1,
    minHeight: "calc(100vh - 200px)",
    display: "flex",
    alignItems: "center"
  },
  mainContent: {
    position: "relative",
    top: "2rem",
    maxWidth: "700px",
    margin: "5rem auto",
    textAlign: "center",
    "& h1": {
      paddingBottom: "3rem"
    },
    "& h2": {
      paddingBottom: "2rem"
    },
    "& p": {
      paddingBottom: "2rem"
    }
  }
})
