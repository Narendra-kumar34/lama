import React from "react";
import styles from "./UploadModal.module.css";
import Modal from "react-modal";
import { useState } from "react";
import CancelImage from "../../../assets/cancelImg.png";
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

export default function UploadModal({ platformImage, platformName, type="normal", projectName, setEpisodes }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const email = localStorage.getItem("email");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.endpoint}/projects/episodes`, {
        email: email,
        name: projectName,
        episodeName: name,
        description: description
      });
      const episodeBody = {
        name: response.data.name,
        uploadDateTime: response.data.uploadDateTime
      };
      setEpisodes((prevEpisodes) => [episodeBody, ...prevEpisodes]);
      setName("");
      setDescription("");
      closeModal();
    } catch (err) {
      if(err.response.status === 422) {
        window.alert("Duplicate Episode name")
      }
      else {
        console.log(err);
      }
    }
  };

  return (
    <>
      <button
        className={styles.Button}
        onClick={openModal}
        style={{ fontSize: `${type === "normal" ? "26.64px" : "19.17px"}` }}
      >
        <div style={{ height: `${type === "normal" ? "82.71px" : "60px"}`, width: `${type === "normal" ? "120px" : "90px"}` }}>
          {platformImage !== null ? <img src={platformImage} alt="source" style={{ objectFit: "fill" }} /> : <div className={styles.blankImage}></div>}
        </div>
        {`Upload ${platformName}`}
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="UploadModal"
      >
        <div className={styles.head}>
          <div className={styles.logoAndName}>
            <div style={{ height: "82.71px", width: "84px" }}>
            {platformImage !== null ? <img src={platformImage} alt="source" style={{ objectFit: "fill" }} /> : <div className={styles.blankImage}></div>}
            </div>
            <h1>{`Upload from ${platformName}`}</h1>
          </div>
          <button className={styles.cancelButton} onClick={closeModal}>
            <img alt="cancel" src={CancelImage} />
          </button>
        </div>
        <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
          <div style={{ width: "100%" }}>
            <label>Name</label>
            <input
              className={styles.inputBox}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <label>Description</label>
            <textarea
              className={styles.inputBox}
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input className={styles.submitButton} type="submit" value="Upload" />
        </form>
      </Modal>
    </>
  );
}
