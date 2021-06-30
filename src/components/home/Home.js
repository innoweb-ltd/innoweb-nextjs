// IMPORT STYLES
import { useCommons } from "@styles/common/common.styles.js"
import { useStyles } from "@styles/home/home.styles.js"

const Home = ({ t }) => {
  // HOOKS
  const classes = { ...useStyles(), ...useCommons() }

  // DATA
  const rowCount = path => {
    switch (path) {
      case "service":
        return 6
      default:
        return 5
    }
  }
  const renderData = path => {
    return [...new Array(rowCount(path)).keys()].slice(1)
  }

  // MAIN RENDER
  return (
    <main className={classes.main}>
      <div className={classes.mainHero}>
        <div className={classes.container}>
          <h1>{t("home-title")}</h1>
          <h2>{t("home-subtitle")}</h2>
        </div>
      </div>
      <div className={classes.mainIntro}>
        <div className={`${classes.mainIntroRow} ${classes.container}`}>
          <h2>{t("home-text-1")}</h2>
          <p>{t("home-text-2-1")}</p>
          <p>{t("home-text-2-2")}</p>
        </div>
      </div>
      <div className={classes.mainServices}>
        <div className={`${classes.mainServicesRow} ${classes.container}`}>
          {renderData("service").map((x, i) => (
            <div className={classes.mainServicesColumn} key={i}>
              <p>{t(`home-service-${x}`)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.mainSpeed}>
        <div className={`${classes.mainSpeedRow} ${classes.container}`}>
          <div className={classes.mainSpeedRowColumn}>
            <h2>{t("home-text-3")}</h2>
            <p>{t("home-text-4")}</p>
            <p>{t("home-text-5")}</p>
          </div>
        </div>
      </div>
      <div className={classes.mainTeam}>
        <div className={`${classes.mainTeamRow} ${classes.container}`}>
          <div className={classes.mainTeamRowColumn}>
            {renderData("kasper").map((x, i) => (
              <p key={i}>{t(`home-kasper-${x}`)}</p>
            ))}
          </div>
          <div className={classes.mainTeamRowColumn}>
            {renderData("erwan").map((x, i) => (
              <p key={i}>{t(`home-erwan-${x}`)}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
