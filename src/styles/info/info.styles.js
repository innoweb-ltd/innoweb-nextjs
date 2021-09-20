import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  main: {
    zIndex: 1,
    minHeight: "calc(100vh - 400px)",
    padding: "10rem 0 2rem"
  },
  mainHero: {
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
    "& h1": {
      paddingBottom: "2rem"
    },
    "& p": {
      paddingBottom: "2rem"
    }
  },
  mainContent: {
    maxWidth: "900px",
    margin: "0 auto"
  },
  mainContentRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "2rem"
  },
  mainContentColumn: {
    maxWidth: "400px",
    contain: "content",
    margin: "1rem 0",
    "& h2": {
      paddingBottom: "1rem"
    },
    "& a": {
      paddingBottom: "1rem"
    },
    "& p": {
      paddingBottom: ".5rem"
    }
  },
  boxShadow: {
    boxShadow: "0px 5px 25px 0 rgb(46 61 73 / 20%)"
  }
})
