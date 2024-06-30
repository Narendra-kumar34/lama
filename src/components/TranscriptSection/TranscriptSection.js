import React, { useEffect } from "react";
import styles from "./TranscriptSection.module.css";
import EditModePill from "../EditModePill/EditModePill";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";
import { useState } from "react";
import { config } from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function TranscriptSection({ projectName, episodeName }) {
  const [isEditMode, setEditMode] = useState(false);
  const [currDescription, setDescription] = useState();
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  useEffect(() => {
    const funct = async () => {
      await fetchTranscript();
    }
    funct();
  }, []);

  const fetchTranscript = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/projects/transcript`,{
        headers: {
          email: email,
          name: projectName,
          episodeName: episodeName
        }
      });
      setDescription(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  const handleDiscard = () => {
    navigate("/projects", { state: { projectName: projectName } });
  };

  const handleSave = async () => {
    try {
      await axios.patch(`${config.endpoint}/projects/transcript`,{
          email: email,
          name: projectName,
          episodeName: episodeName,
          description: currDescription
      });
      navigate("/projects", { state: { projectName: projectName } });
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 style={{ color: "var(--color-primary)" }}>
          Edit Transcript
        </h1>
        {isEditMode && <div className={styles.saveOrDiscardButtonsWrapper}>
            <button className={styles.discardButton} onClick={handleDiscard}>Discard</button>
            <button className={styles.saveButton} onClick={handleSave}>Save & exit</button>
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
          {!isEditMode ? currDescription : <textarea className={styles.textArea} rows="12" value={currDescription} onChange={(e) => setDescription(e.target.value)} />}
        </div>
      </div>
    </div>
  );
}
