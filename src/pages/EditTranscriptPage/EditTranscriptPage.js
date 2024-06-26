import React from "react";
import styles from "./EditTranscriptPage.module.css";
import StaticDrawer from "../../components/StaticDrawer/StaticDrawer";
import InsiderNavbar from "../../components/InsiderNavbar/InsiderNavbar";
import { useLocation } from "react-router-dom";
import TranscriptSection from "../../components/TranscriptSection/TranscriptSection";

export default function EditTranscriptPage() {
    const location = useLocation();
    const projectName = location.state && location.state.projectName;
    const episodeName = location.state && location.state.episodeName;

    return(
        <div className={styles.wrapper}>
            <StaticDrawer projectName={projectName} />
            <div className={styles.transcriptSectionWrapper}>
                <InsiderNavbar projectName={projectName} sectionName="Transcript" />
                <TranscriptSection projectName={projectName} episodeName={episodeName} />
            </div>
        </div>
    )
}