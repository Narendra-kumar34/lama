import React from "react";
import styles from "./TranscriptSection.module.css";
import EditModePill from "../EditModePill/EditModePill";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { useState } from "react";

const description = `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.`

export default function TranscriptSection({ projectName, fileId }) {
  const [isEditMode, setEditMode] = useState(false);
  const [currDescription, setDescription] = useState(description);
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 style={{ color: "var(--color-primary)" }}>
          Edit Transcript
        </h1>
        {isEditMode && <div className={styles.saveOrDiscardButtonsWrapper}>
            <button className={styles.discardButton}>Discard</button>
            <button className={styles.saveButton}>Save & exit</button>
        </div>}
      </div>
      <div className={styles.transcriptionWrapper}>
        <div className={styles.optionsWrapper}>
          <button className={styles.editModePill} onClick={() => setEditMode(true)}>
            <EditModePill />
          </button>
          <div className={styles.searchIconBox}>
            <SearchIcon />
          </div>
        </div>
        <div className={styles.description}>
          {!isEditMode ? description : <textarea className={styles.textArea} rows="12" value={currDescription} onChange={(e) => setDescription(e.target.value)} />}
        </div>
      </div>
    </div>
  );
}
