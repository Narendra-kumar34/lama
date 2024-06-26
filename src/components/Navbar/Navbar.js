import React from "react";
import styles from "./Navbar.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import SettingsIcon from "../../assets/settingsIcon.png";
import NotificationsIcon from "../../assets/notificationsIcon.png";

export default function Navbar() {
  return <div className={styles.wrapper}>
    <div className={styles.logoAndNameWrapper}>
        <Logo />
        <div className={styles.applicationName}>
            LAMA.
        </div>
    </div>
    <div className={styles.optionsWrapper}>
        <button className={styles.Button}><img src={SettingsIcon} alt="settings" /></button>
        <button className={styles.Button}><img src={NotificationsIcon} alt="notifications" /></button>
    </div>
  </div>;
}
