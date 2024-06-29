import React from "react";
import styles from "./InsiderNavbar.module.css";
import { ReactComponent as HomeIcon } from "../../assets/homePurpleIcon.svg";
import { Link } from "react-router-dom";
import NotificationsIcon from "../../assets/notificationsIcon.png";

export default function InsiderNavbar({ projectName="Sample Project", sectionName="sampleSection" }) {
    return(<div className={styles.wrapper}>
        <div className={styles.pathBox}>
            <Link to="/"><HomeIcon /></Link>
            {sectionName !== "/ Account Settings" && <div className={styles.projectName}>{`/ ${projectName} /`}</div>}
            <div className={styles.sectionName}>{sectionName}</div>
        </div>
        <div className={styles.otherOptions}>
        <button className={styles.Button}><img src={NotificationsIcon} alt="notifications" /></button>
        </div>
    </div>)
}