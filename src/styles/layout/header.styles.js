import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  header: {
    boxShadow: "0px 5px 25px 0 rgba(46, 61, 73, 0.2)",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0"
  },
  headerContainer: {
    maxWidth: "1500px",
    height: "100%",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerContainerLogo: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    alignSelf: "center",
    "& svg": {
      marginTop: "1rem",
      width: "80px",
      color: "#50406b"
    }
  },
  headerContainerToggle: {
    alignSelf: "center",
    "@media (min-width: 700px)": {
      display: "none"
    }
  },
  headerContainerNav: {
    alignSelf: "center",
    "& nav": {
      display: "flex",
      flexDirection: "row"
    },
    "& a": {
      padding: ".75rem 1.1rem",
      textTransform: "uppercase"
    },
    "& a:last-child": {
      background: "#8061b5",
      color: "white",
      "&:hover": {
        background: "#50406b"
      }
    },
    "@media (max-width: 700px)": {
      display: "none",
      "& nav": {
        padding: "3rem 1rem",
        flexDirection: "column",
        position: "fixed",
        top: "0",
        right: "0",
        bottom: "0",
        background: "#3a3246",
        textAlign: "right"
      },
      "& a": {
        padding: "1rem",
        color: "white"
      }
    }
  }
})
