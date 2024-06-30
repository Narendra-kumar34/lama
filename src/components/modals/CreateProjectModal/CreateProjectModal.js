import React from "react";
import styles from "./CreateProjectModal.module.css";
import { useState } from "react";
import Modal from "react-modal";
import PlusImg from "../../../assets/plusImg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { config } from "../../../App";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "0.75rem",
    width: "50vw",
  },
};

export default function CreateProjectModal({ type = "normal" }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (projectName) {
      try {
        await axios.post(`${config.endpoint}/projects`, {
          email: email,
          name: projectName,
        });
      } catch (err) {
        console.log(err);
      }
      setProjectName("");
      closeModal();
      navigate("/projects", { state: { projectName: projectName } });
    }
  };

  const handleCancel = () => {
    setProjectName("");
    closeModal();
  };

  return (
    <>
      <button
        className={type === "normal" ? styles.Button : styles.miniButton}
        onClick={openModal}
      >
        <img
          src={PlusImg}
          alt="+"
          style={{
            height: `${type === "normal" ? "55.85px" : "36.87px"}`,
            width: `${type === "normal" ? "55.85px" : "36.87px"}`,
          }}
        />
        Create New Project
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CreateProjectModal"
      >
        <h2 style={{ color: "#000000", marginBottom: "1rem" }}>
          Create Project
        </h2>
        <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
          <label>Enter Project Name:</label>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Type here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {!projectName && (
            <div className={styles.warningText}>
              Project Name Can't be empty
            </div>
          )}
          <div className={styles.optionsWrapper}>
            <button className={styles.cancelButton} onClick={handleCancel}>
              Cancel
            </button>
            <input
              className={styles.createButton}
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
