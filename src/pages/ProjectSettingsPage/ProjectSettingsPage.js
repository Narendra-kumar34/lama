import React from "react";
import styles from "./ProjectSettingsPage.module.css";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";

export default function ProjectSettingsPage() {
    return(
        <div className={styles.wrapper}>
            <div className={styles.staticDrawer}>
                <StaticDrawer />
            </div>
            <div className={styles.uploadSectionWrapper}>
            </div>
        </div>
    )
}