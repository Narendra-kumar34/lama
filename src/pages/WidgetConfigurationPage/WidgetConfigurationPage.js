import React from "react";
import styles from "./WidgetConfigurationPage.module.css";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";
import InsiderNavbar from "../../components/InsiderNavbar/InsiderNavbar";
import ConfigurationSection from "../../components/ConfigurationSection/ConfigurationSection";
import { useLocation } from "react-router-dom";

export default function WidgetConfigurationPage() {
    const location = useLocation();
    const projectName = location.state && location.state.projectName;

    return(
        <div className={styles.wrapper}>
            <StaticDrawer projectName={projectName} />
            <div className={styles.configurationSectionWrapper}>
                <InsiderNavbar projectName={projectName} sectionName="Widget Configuration" />
                <ConfigurationSection />
            </div>
        </div>
    )
}