import { createUseStyles } from "react-jss"

export const useCommons = createUseStyles({
  container: {
    margin: "0 auto",
    maxWidth: "1500px",
    "@media (max-width: 1500px)": {
      padding: "0 1.5rem"
    }
  },
  subContainer: {
    margin: "0 auto",
    maxWidth: "1000px",
    "@media (max-width: 1500px)": {
      padding: "0 1.5rem"
    }
  },
  errors: {
    display: "flex",
    alignItems: "center",
    paddingTop: "0.5rem",
    "& svg": {
      fill: "red",
      padding: "0 0.5rem"
    },
    "& p": {
      color: "red",
      padding: "0 !important",
      fontWeight: 400
    }
  },
  errorsBorder: {
    border: "2px solid red !important"
  }
})
