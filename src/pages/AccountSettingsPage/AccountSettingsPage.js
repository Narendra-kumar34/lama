import React from "react";
import styles from "./AccountSettingsPage.module.css";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";
import InsiderNavbar from "../../components/InsiderNavbar/InsiderNavbar";
import { useLocation } from "react-router-dom";
import AccountSection from "../../components/AccountSection/AccountSection";

export default function AccountSettingsPage() {
    const location = useLocation();
    const projectName = location.state && location.state.projectName;

    return(
        <div className={styles.wrapper}>
            <StaticDrawer projectName={projectName} />
            <div className={styles.accountSectionWrapper}>
                <InsiderNavbar sectionName="/ Account Settings" />
                <AccountSection />
            </div>
        </div>
    )
}