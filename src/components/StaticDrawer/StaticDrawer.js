import React from "react";
import styles from "./StaticDrawer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SettingsIcon from "../../assets/settingsIcon.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function StaticDrawer() {
    const navigate = useNavigate();
    const location = useLocation();

    const { pathname } = location;

    const handleNavigate = (currPath) => {
        if(pathname !== currPath) {
            navigate(currPath);
        }
    }
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.logoAndNameWrapper}>
          <Logo />
          <div className={styles.applicationName}>LAMA.</div>
        </div>
        <div style={{ padding: "0rem 0rem 1rem 1.35rem" }}>
          Podcast Upload Flow
        </div>
        <div className={styles.optionsWrapper}>
          <button className={styles.Button} onClick={() => handleNavigate("/projects")}>
            <div className={styles.optionNumber}>1</div>
            <div>Projects</div>
          </button>
          <button className={styles.Button} onClick={() => handleNavigate("/configuration")}>
            <div className={styles.optionNumber}>2</div>
            <div>Widget Configurations</div>
          </button>
          <button className={styles.Button}>
            <div className={styles.optionNumber}>3</div>
            <div>Deployment</div>
          </button>
          <button className={styles.Button}>
            <div className={styles.optionNumber}>4</div>
            <div>Pricing</div>
          </button>
          <div
            style={{
              borderTop: "1px solid rgba(237, 231, 225, 1)",
              paddingTop: "0.5rem",
            }}
          ></div>
        </div>
      </div>
      <div style={{padding: "0rem 1rem"}}>
        <div
          style={{
            borderTop: "1px solid rgba(237, 231, 225, 1)",
            paddingBottom: "0.5rem",
          }}
        ></div>
        <button className={styles.Button} style={{marginBottom: "0.5rem"}} onClick={() => handleNavigate("/settings")}>
          <div className={styles.optionNumber} style={{padding: "10px", height: "40px", width: "40px"}}>
            <img alt="settings" src={SettingsIcon} />
          </div>
          <div>Settings</div>
        </button>
      </div>
    </div>
  );
}
