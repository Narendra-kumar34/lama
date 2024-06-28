import React from "react";
import styles from "./DropBox.module.css";
import CloudImg from "../../assets/cloudImg.png";

export default function DropBox() {
  return (
    <div className={styles.wrapper}>
      <div style={{height: "128px", width: "128px"}}>
        <img src={CloudImg} alt="cloudPic" />
      </div>
      <div style={{textAlign: "center"}}>
        <div className={styles.line1}>{`Select a file or drag and drop here (Podcast Media or Transcription Text)`}</div>
        <div className={styles.line2}>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </div>
      </div>
      <button className={styles.Button}>Select File</button>
    </div>
  );
}
