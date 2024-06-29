import React from "react";
import styles from "./EditModePill.module.css";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";

export default function EditModePill() {
  return (
    <div className={styles.wrapper}>
      <EditIcon />
      <div>Edit Mode</div>
    </div>
  );
}
