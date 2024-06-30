import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import BackToHomePill from "../../components/BackToHomePill/BackToHomePill";
import Hero from "../../components/Hero/Hero";
import CreateProjectModal from "../../components/modals/CreateProjectModal/CreateProjectModal";
import Card from "../../components/Card/Card";
import CollectEmailModal from "../../components/modals/CollectEmailModal/CollectEmailModal";

const data = [
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#7E22CE",
  },
  {
    name: "sample2 project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#F8A01D",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#6366F1",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#7E22CE",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#F8A01D",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#6366F1",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#7E22CE",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#F8A01D",
  },
  {
    name: "sample project",
    episodesCount: "4",
    iconText: "SP",
    iconColor: "#6366F1",
  },
];

export default function LandingPage() {
  const userEmail = localStorage.getItem("email");
  return (
    <>
      <Navbar />
      <button className={styles.backtohomePill}>
        <BackToHomePill />
      </button>
      {!userEmail || data.length === 0 ? (
        <Hero />
      ) : (
        <div style={{ width: "100%" }}>
          <div className={styles.head}>
            <h1 style={{ color: "var(--color-primary)", fontSize: "62px" }}>
              Projects
            </h1>
            <CreateProjectModal type="mini" />
          </div>
          <div className={styles.projectsGrid}>
            {data.map((project, idx) => (
              <Card
                iconText={project.iconText}
                iconColor={project.iconColor}
                projectName={project.name}
                episodesCount={project.episodesCount}
                key={idx}
              />
            ))}
          </div>
        </div>
      )}
      {!userEmail && <CollectEmailModal />}
    </>
  );
}
