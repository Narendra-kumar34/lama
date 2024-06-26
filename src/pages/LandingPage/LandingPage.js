import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import BackToHomePill from "../../components/BackToHomePill/BackToHomePill";
import Hero from "../../components/Hero/Hero";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <button className={styles.backtohomePill}>
        <BackToHomePill />
      </button>
      <Hero />
    </>
  );
}
