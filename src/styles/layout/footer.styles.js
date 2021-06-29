import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  footer: {
    width: "100%",
    backgroundColor: "#484848",
    color: "white"
  },
  footerRow: {
    maxWidth: "1500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: "188px",
    "& h4": {
      color: "white",
      textTransform: "uppercase",
      fontSize: "13px",
      marginBottom: "18px"
    }
  },
  footerRowColumn: {
    minWidth: "15rem",
    margin: "1rem 0",
    "& p": {
      padding: ".5rem 0"
    },
    "& a": {
      padding: ".5rem 0",
      color: "#8061b5",
      "&:hover": {
        color: "#50406b"
      }
    },
    "& svg": {
      width: "1rem",
      height: "1rem"
    },
    "& div": {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1rem"
    },
    "&:last-child div": {
      flexDirection: "row",
      "& a": {
        paddingRight: ".5rem"
      }
    }
  }
})
