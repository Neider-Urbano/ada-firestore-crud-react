import React, { useState } from "react";
import Patient from "./Patient";
import useData from "../hooks/useData";

const Patients = () => {
  const data = useData("patients");
  const patients = data.data;
  data.getData("patients");

  return (
    <div className="container-patients">
      <h2>List of the Patients</h2>
      <div className="container-patients-cards">
        {patients?.length > 0 ? (
          patients.map((patient) => {
            return <Patient key={patient.id} patient={patient} />;
          })
        ) : (
          <div>No existen pacientes</div>
        )}
      </div>
    </div>
  );
};

export default Patients;
