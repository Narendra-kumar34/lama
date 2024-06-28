import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/heroImg.png";
import CreateProjectModal from "../modals/CreateProjectModal/CreateProjectModal";

export default function Hero() {
    return(<div className={styles.wrapper}>
        <div className={styles.heading}>Create a New Project</div>
        <div className={styles.heroImage}>
            <img src={HeroImg} alt="HeroImage" />
        </div>
        <div className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        </div>
        <CreateProjectModal />
    </div>)
}