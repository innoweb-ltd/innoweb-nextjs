import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  main: {
    zIndex: 1,
    position: "relative",
    top: "-8rem"
  },
  mainHero: {
    height: "70vh",
    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBKIT_URL}/hero-cover_NBU62a9GA6sQ.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
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
  },
  mainIntro: {
    backgroundColor: "#484848",
    padding: "2.5rem 0",
    color: "#fff",
    "& p": {
      textAlign: "center"
    }
  },
  mainServices: {
    backgroundColor: "#efede7",
    padding: "2.5rem 0",
    color: "#484848"
  },
  mainServicesRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainTeam: {
    backgroundColor: "#50406b",
    padding: "2.5rem 0"
  },
  mainTeamRow: {
    display: "flex",
    flexWrap: "wrap"
  },
  mainTeamRowColumn: {
    marginRight: "2rem",
    "& p": {
      margin: "1rem 0",
      color: "white"
    },
    "& p:first-child": {
      fontWeight: "bold"
    }
  },
  mainSpeed: {
    height: "50vh",
    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBKIT_URL}/mid-section_6vBLb5JkVZh.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainSpeedRow: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  mainSpeedRowColumn: {
    margin: "1rem 0",
    maxWidth: "25rem",
    "& p": {
      margin: "1rem 0",
      color: "white"
    }
  }
})
