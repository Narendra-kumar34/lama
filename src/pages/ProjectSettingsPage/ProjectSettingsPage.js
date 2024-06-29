import React from "react";
import styles from "./ProjectSettingsPage.module.css";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";
import InsiderNavbar from "../../components/InsiderNavbar/InsiderNavbar";
import { useLocation } from "react-router-dom";
import UploadSection from "../../components/UploadSection/UploadSection";

export default function ProjectSettingsPage() {
    const location = useLocation();
    const projectName = location.state && location.state.projectName;

    return(
        <div className={styles.wrapper}>
            <div className={styles.staticDrawer}>
                <StaticDrawer />
            </div>
            <div className={styles.uploadSectionWrapper}>
                <InsiderNavbar projectName={projectName} sectionName="Upload" />
                <UploadSection projectName={projectName} />
            </div>
        </div>
    )
}