import { createUseStyles } from "react-jss"

export const useStyles = createUseStyles({
  main: {
    zIndex: 1
  },
  mainHero: {
    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBKIT_URL}/hero-cover_NBU62a9GA6sQ.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    "& h1": {
      paddingTop: "15rem",
      fontSize: "min(max(2.5rem, 8vw), 5rem)",
      color: "white",
      maxWidth: "50rem",
      fontWeight: "300",
      lineHeight: "1.2"
    },
    "& h2": {
      padding: "1rem 0 5rem",
      color: "#aaa",
      lineHeight: "1.5"
    }
  },
  mainIntro: {
    backgroundColor: "#484848",
    padding: "3rem 0",
    color: "white",
    textAlign: "center",
    "& h2": {
      paddingBottom: "2rem"
    }
  },
  mainIntroRow: {
    maxWidth: "600px",
    margin: "0 auto",
    "& p": {
      paddingBottom: "1rem"
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
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  mainServicesColumn: {
    padding: "2rem 0"
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
    color: "white",
    backgroundImage: `url(${process.env.NEXT_PUBLIC_WEBKIT_URL}/mid-section_6vBLb5JkVZh.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "& h2": {
      paddingBottom: "1rem"
    }
  },
  mainSpeedRow: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  mainSpeedRowColumn: {
    padding: "5rem 0",
    margin: "1rem 0",
    maxWidth: "25rem",
    "& p": {
      margin: "1rem 0",
      color: "white"
    }
  }
})
