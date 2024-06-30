import React from "react";
import styles from "./CollectEmailModal.module.css";
import { useState } from "react";
import Modal from "react-modal";
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

export default function CollectEmailModal({ setProjects }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("email", `${email}`);
      try {
        const response = await axios.get(`${config.endpoint}/projects`,{
          headers: {
            email: email
          }
        });
        setProjects(response.data);
      }
      catch(err) {
        console.log(err);
      }
      setEmail("");
      closeModal();
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="CollectEmailModal"
        shouldCloseOnOverlayClick={false}
      >
        <h2 style={{ color: "#000000", marginBottom: "1rem" }}>
          Email Address
        </h2>
        <form className={styles.formWrapper} onSubmit={(e) => handleSubmit(e)}>
          <label>Enter your Email Address:</label>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Type here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email && (
            <div className={styles.warningText}>Email Can't be empty</div>
          )}
          <div className={styles.buttonWrapper}><input className={styles.createButton} type="submit" value="Done" /></div>
          
        </form>
      </Modal>
    </>
  );
}
