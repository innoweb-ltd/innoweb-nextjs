import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    "& a": {
      color: "white"
    },
    background: "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1))"
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerLogo: {
    contain: "content"
  },
  headerLower: {
    "@media (max-width: 450px)": {
      color: "white",
      border: "none",
      bottom: "0",
      zIndex: 9
    }
  },
  headerLowerBtn: {
    fill: "white",
    color: "white",
    display: "flex",
    flexDirection: "row-reverse",
    "&>div": {
      padding: ".5rem .7rem"
    },
    "@media (min-width: 1000px)": {
      display: "none"
    }
  },
  headerLowerNav: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 1.5rem",
    alignItems: "center",
    marginLeft: "2.6rem",
    "@media (max-width: 450px)": {
      display: "none",
      padding: "0 .5rem",
      "&>div:first-child": {
        position: "fixed",
        right: "0",
        top: "0",
        bottom: "2.5rem",
        overflow: "scroll",
        backgroundColor: "#3a3246",
        width: "13rem",
        borderBottom: "1px solid #28242d"
      }
    }
  },
  headerLowerNavShow: {
    display: "flex"
  },
  headerLowerNavClose: {
    position: "fixed",
    bottom: "0",
    right: "0",
    width: "13rem",
    height: "2.5rem",
    backgroundColor: "#3a3246",
    alignItems: "center",
    display: "flex",
    flexDirection: "row-reverse",
    "& span": {
      padding: ".5rem .7rem"
    },
    "@media (min-width: 450px)": {
      display: "none"
    }
  },
  headerLowerNavMenus: {
    "@media (max-width: 450px)": {
      paddingTop: "1rem"
    }
  },
  headerLowerNavMenu: {
    display: "flex",
    flexWrap: "wrap",
    "&>a": {
      "@media (max-width: 450px)": {
        width: "100%",
        textAlign: "right"
      }
    },
    "& div": {
      fill: "#b7b7b7",
      padding: ".3rem 1rem",
      "@media (min-width: 1000px)": {
        display: "none"
      },
      "@media (max-width: 550px)": {
        display: "none"
      }
    },
    "& h4": {
      "@media (max-width: 450px)": {
        color: "#9d91b0",
        width: "100%",
        textAlign: "right",
        padding: ".5rem 1rem"
      }
    },
    "& p": {
      height: "1rem",
      padding: ".5rem 1rem",
      "@media (max-width: 450px)": {
        color: "white"
      },
      "@media (min-device-width: 450px) and (max-device-width: 1000px)": {
        display: "none"
      },
      "&:hover": {
        color: "white",
        backgroundColor: "#50406b"
      }
    }
  }
})
