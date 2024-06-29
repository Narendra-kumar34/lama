import React, { useState } from "react";
import styles from "./ConfigurationSection.module.css";
import { ReactComponent as UploadIcon } from "../../assets/uploadIcon.svg";

export default function ConfigurationSection() {
  const [generalInfo, setGeneralInfo] = useState({
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });
  const [displayInfo, setDisplayInfo] = useState({
    primaryColor: "#7BD568",
    fontColor: "#3C3C3C",
    fontSize: "",
    chatHeight: "",
    showSources: false,
    chatIconSize: "Small (48x48 px)",
    positionOnScreen: "Bottom Right",
    distanceFromBottom: "",
    horizontalDistance: "",
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
        {/* Tabs */}
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
        {/* General Tab */}
        <div
          className={`${styles.tabContent} ${
            activeTab === "general" ? styles.active : ""
          }`}
          id="general"
        >
          {/* Chatbot Name */}
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
          {/* Welcome Message */}
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
          {/* Input Placeholder */}
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
        {/* Display section tab from here */}
        <div
          className={`${styles.tabContent} ${
            activeTab === "display" ? styles.active : ""
          }`}
          id="display"
        >
          <div className={styles.displayGrid}>
            {/* Primary Color */}
            <div className={styles.displaySection}>
              <label>Primary Color</label>
              <div className={styles.primaryColorPicker}>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={displayInfo.primaryColor}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      primaryColor: e.target.value,
                    }))
                  }
                />
                <input
                  type="color"
                  className={styles.colorPicker}
                  value={displayInfo.primaryColor}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      primaryColor: e.target.value,
                    }))
                  }
                />
              </div>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>
            {/* Font Color */}
            <div className={styles.displaySection}>
              <label>Font Color</label>
              <div className={styles.primaryColorPicker}>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={displayInfo.fontColor}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      fontColor: e.target.value,
                    }))
                  }
                />
                <input
                  type="color"
                  className={styles.colorPicker}
                  value={displayInfo.fontColor}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      fontColor: e.target.value,
                    }))
                  }
                />
              </div>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>
            {/* Font Size */}
            <div className={styles.displaySection}>
              <label>Font Size (in px)</label>
              <input
                type="number"
                className={styles.inputBox}
                value={displayInfo.fontSize}
                onChange={(e) =>
                  setDisplayInfo((prevState) => ({
                    ...prevState,
                    fontSize: e.target.value,
                  }))
                }
              />
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>
            {/* Chat Height */}
            <div className={styles.displaySection}>
              <label>Chat Height (in % of total screen)</label>
              <input
                type="text"
                className={styles.inputBox}
                value={displayInfo.chatHeight}
                onChange={(e) =>
                  setDisplayInfo((prevState) => ({
                    ...prevState,
                    chatHeight: e.target.value,
                  }))
                }
              />
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>
          </div>
          {/* Toggle Button */}
          <div className={styles.showSourcesWrapper}>
            <div style={{ width: "50%" }}>
              <label>Show Sources</label>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
            </div>
            <input
              type="checkbox"
              className={styles.checkBoxInput}
              checked={displayInfo.showSources}
              onChange={(e) =>
                setDisplayInfo((prevState) => ({
                  ...prevState,
                  showSources: e.target.checked,
                }))
              }
            />
          </div>
          <div style={{ border: "2px solid rgba(218, 218, 218, 1)" }}></div>
          {/* Display section second half from here*/}
          <div className={styles.displaySection}>
            <h2 style={{ color: "var(--color-primary)", padding: "2rem 0rem" }}>
              Chat Icon
            </h2>
            <div className={styles.displayGrid}>
              {/* Chat Icon Size*/}
              <div>
                <label>Chat Icon Size</label>
                <select
                  className={styles.selector}
                  value={displayInfo.chatIconSize}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      chatIconSize: e.target.value,
                    }))
                  }
                >
                  <option value="Small (48x48 px)">Small (48x48 px)</option>
                  <option value="Medium (60x60 px)">Medium (60x60 px)</option>
                  <option value="Large (76x76 px)">Large (76x76 px)</option>
                </select>
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
              {/* Position on Screen*/}
              <div>
                <label>Position on Screen</label>
                <select
                  className={styles.selector}
                  value={displayInfo.positionOnScreen}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      positionOnScreen: e.target.value,
                    }))
                  }
                >
                  <option value="Bottom Right">Bottom Right</option>
                  <option value="Bottom Left">Bottom Left</option>
                  <option value="Top Right">Top Right</option>
                  <option value="Top Left">Top Left</option>
                </select>
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
            </div>
            <div className={styles.displayGrid}>
              {/* Distance from Bottom */}
              <div>
                <label>Distance from Bottom (in px)</label>
                <input
                  type="number"
                  className={styles.inputBox}
                  value={displayInfo.distanceFromBottom}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      distanceFromBottom: e.target.value,
                    }))
                  }
                />
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
              <div>
                {/* Horizontal Distance */}
                <label>Horizontal Distance (in px)</label>
                <input
                  type="number"
                  className={styles.inputBox}
                  value={displayInfo.horizontalDistance}
                  onChange={(e) =>
                    setDisplayInfo((prevState) => ({
                      ...prevState,
                      horizontalDistance: e.target.value,
                    }))
                  }
                />
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit</p>
              </div>
            </div>
            {/* Bot Icon */}
            <div>
              <label>Bot Icon</label>
              <div className={styles.uploadBox}>
                <div className={styles.botIconPreview}></div>
                <div>
                  <button className={styles.uploadButton}>Upload Image<UploadIcon /></button>
                  <p style={{padding: "0rem"}}>Recommended Size: 48x48px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.tabContent} ${
            activeTab === "advanced" ? styles.active : ""
          }`}
          id="advanced"
        >
        </div>
      </div>
    </div>
  );
}
