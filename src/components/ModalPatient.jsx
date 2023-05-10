import React, { useState } from "react";
import Modal from "react-modal";
import useData from "../hooks/useData";
import { toast } from "react-toastify";

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

const ModalPatient = ({ modalIsOpen, setIsOpen, patient }) => {
  const [data, setData] = useState({
    sangre: patient.sangre,
  });
  const options = useData("patients");
  const notify = (data) => toast(data);

  function closeModal() {
    setIsOpen(false);
  }
  const handleInputs = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    options.updateData(patient.id, data).then((data) => {
      notify(data);
      setTimeout(() => {
        closeModal();
      }, 2000);
    });
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p onClick={closeModal}>x</p>
      <h2>Actualiza tu Paciente</h2>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          <p>Sangre</p>
          <input
            type="text"
            value={data.sangre}
            name="sangre"
            required={true}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </label>
        <input type="submit" value="Update" className="input-save" />
        <input
          type="button"
          value="Cancel"
          className="input-save"
          onClick={closeModal}
        />
      </form>
    </Modal>
  );
};

export default ModalPatient;
