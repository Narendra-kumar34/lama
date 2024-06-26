import React from "react";
import styles from "./BackToHomePill.module.css";
import { ReactComponent as HomeIcon } from "../../assets/homeIcon.svg";

export default function BackToHomePill() {
  return (
    <div className={styles.wrapper}>
      <HomeIcon />
      <div>Back To Home</div>
    </div>
  );
}
