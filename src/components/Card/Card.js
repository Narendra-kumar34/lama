import React from "react";
import styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";

export default function Card({
  iconText,
  iconColor,
  projectName,
  episodesCount,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projects", { state: { projectName: projectName } });
  };
  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <div className={styles.icon} style={{ backgroundColor: `${iconColor}` }}>
        {iconText}
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.projectName}>{projectName}</div>
          <div
            className={styles.episodesCount}
          >{`${episodesCount} Episodes`}</div>
        </div>
        <div className={styles.lastEdited}>Last edited a week ago</div>
      </div>
    </div>
  );
}
