import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  home: {
    zIndex: 1,
    position: "relative",
    top: "-8rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBKIT_URL}/hero-cover_NBU62a9GA6sQ.jpg)`,
    height: "50rem",
    "& h1": {
      paddingTop: "15rem",
      fontSize: "3.5rem",
      color: "white",
      width: "40rem",
      fontWeight: "300",
      lineHeight: "1.2"
    },
    "& h2": {
      paddingTop: "1rem",
      color: "#aaa"
    }
  }
})
