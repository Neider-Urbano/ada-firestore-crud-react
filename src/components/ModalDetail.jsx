import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const ModalDetail = ({ modalIsOpen, setIsOpen, patient }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p onClick={closeModal}>X</p>
      <h2>Patient No. {patient.id}</h2>
      <h3>{patient.name}</h3>
      <h3>{patient.cedula}</h3>
      <h3>{patient.sangre}</h3>
    </Modal>
  );
};

export default ModalDetail;
