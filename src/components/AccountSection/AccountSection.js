import React from "react";
import styles from "./AccountSection.module.css";
import ProfilePic from "../../assets/profilePic.png";

export default function AccountSection() {
  return (
    <div className={styles.wrapper}>
      <h1 style={{ color: "var(--color-primary)", paddingBottom: "2rem" }}>
        Account Settings
      </h1>
      <div className={styles.detailsWrapper}>
        <div className={styles.profilePic}>
          <img src={ProfilePic} alt="profilePic" />
        </div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            className={styles.inputBox}
            value="username"
            readOnly
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            className={styles.inputBox}
            value="email@gmail.com"
            readOnly
          />
        </div>
      </div>
      <h1
        style={{
          color: "var(--color-primary)",
          padding: "3rem 0rem 2rem 0rem",
        }}
      >
        Subscriptions
      </h1>
      <div className={styles.banner}>
        <div>
          You are currently on the{" "}
          <b>
            <u>Ques AI Basic Plan!</u>
          </b>
        </div>
        <button className={styles.bannerButton}>Upgrade</button>
      </div>
      <button className={styles.cancelButton}><u>Cancel Subscription</u></button>
    </div>
  );
}
