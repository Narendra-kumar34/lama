import React, { useState } from "react";
import styles from "./ConfigurationSection.module.css";

export default function ConfigurationSection() {
  const [generalInfo, setGeneralInfo] = useState({
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "var(--color-primary)", paddingBottom: "2rem" }}>
        Configuration
      </h1>
      <div className={styles.tabWrapper}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              activeTab === "general" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("general")}
          >
            General
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "display" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("display")}
          >
            Display
          </div>
          <div
            className={`${styles.tab} ${
              activeTab === "advanced" ? styles.active : ""
            }`}
            onClick={() => handleTabClick("advanced")}
          >
            Advanced
          </div>
        </div>
        <div
          className={`${styles.tabContent} ${
            activeTab === "general" ? styles.active : ""
          }`}
          id="general"
        >
          <div>
            <label>Chatbot Name</label>
            <input
              type="text"
              className={styles.inputBox}
              value={generalInfo.chatbotName}
              onChange={(e) =>
                setGeneralInfo((prevState) => ({
                  ...prevState,
                  chatbotName: e.target.value,
                }))
              }
            />
            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
          </div>
          <div>
            <label>Welcome Message</label>
            <input
              type="text"
              className={styles.inputBox}
              value={generalInfo.welcomeMessage}
              onChange={(e) =>
                setGeneralInfo((prevState) => ({
                  ...prevState,
                  welcomeMessage: e.target.value,
                }))
              }
            />
            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
          </div>
          <div>
            <label>Input Placeholder</label>
            <input
              type="text"
              className={styles.inputBox}
              value={generalInfo.inputPlaceholder}
              onChange={(e) =>
                setGeneralInfo((prevState) => ({
                  ...prevState,
                  inputPlaceholder: e.target.value,
                }))
              }
            />
            <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div
          className={`${styles.tabContent} ${
            activeTab === "display" ? styles.active : ""
          }`}
          id="display"
        >
          display settings
        </div>
        <div
          className={`${styles.tabContent} ${
            activeTab === "advanced" ? styles.active : ""
          }`}
          id="advanced"
        >
          advanced settings
        </div>
      </div>
    </div>
  );
}
