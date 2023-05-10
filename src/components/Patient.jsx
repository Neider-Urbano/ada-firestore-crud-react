import React, { useState } from "react";
import useData from "../hooks/useData";
import ModalPatient from "./ModalPatient";
import ModalDetail from "./ModalDetail";
import { toast } from "react-toastify";

const Patient = ({ patient }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenDetail, setIsOpenDetail] = useState(false);

  const options = useData("patients");
  const onDelete = options.deleteData;

  function openModal() {
    setIsOpen(true);
  }
  function openModalDetail() {
    setIsOpenDetail(true);
  }
  const notify = (data) => toast(data);
  return (
    <div className="card-patient">
      <div className="patient-info">
        <h5>{patient.name}</h5>
        <h6>{patient.cedula}</h6>
        <h6>{patient.sangre}</h6>
      </div>
      <div className="patient-options">
        <button onClick={openModal} className="button-edit">
          Edit
        </button>
        <button onClick={openModalDetail} className="button-detail">
          Detail
        </button>
        <button
          onClick={() => {
            onDelete("patients", patient.id).then((data) => {
              notify(data);
            });
          }}
          className="button-deleted"
        >
          Delet
        </button>
      </div>
      {modalIsOpen && (
        <ModalPatient
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
          patient={patient}
        />
      )}
      {modalIsOpenDetail && (
        <ModalDetail
          setIsOpen={setIsOpenDetail}
          modalIsOpen={modalIsOpenDetail}
          patient={patient}
        />
      )}
    </div>
  );
};

export default Patient;
