import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import BackToHomePill from "../../components/BackToHomePill/BackToHomePill";
import Hero from "../../components/Hero/Hero";
import CreateProjectModal from "../../components/modals/CreateProjectModal/CreateProjectModal";
import Card from "../../components/Card/Card";
import CollectEmailModal from "../../components/modals/CollectEmailModal/CollectEmailModal";
import { config } from "../../App";
import axios from "axios";

export default function LandingPage() {
  const userEmail = localStorage.getItem("email");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if(userEmail) {
      const funct = async () => {
        await fetchProjects();
      };
      funct();
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/projects`,{
        headers: {
          email: userEmail
        }
      });
      setProjects(response.data);
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <Navbar />
      <button className={styles.backtohomePill}>
        <BackToHomePill />
      </button>
      {!userEmail || projects.length === 0 ? (
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
            {projects.map((project, idx) => (
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
      {!userEmail && <CollectEmailModal setProjects={setProjects} />}
    </>
  );
}
