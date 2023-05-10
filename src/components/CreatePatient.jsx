import React, { useState } from "react";
import useData from "../hooks/useData";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  cedula: "",
  sangre: "",
};
const CreatePatient = () => {
  const [data, setData] = useState(initialState);
  const options = useData("patients");

  const handleInputs = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    options.postData("patients", data).then((id) => {
      notify();
      setData(initialState);
    });
  };

  const notify = () => toast("Patient Created!");

  return (
    <div className="container-form">
      <h2>Form Create Patient</h2>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={data.name}
            name="name"
            required={true}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </label>

        <label>
          <p>Cedula</p>
          <input
            type="number"
            value={data.cedula}
            name="cedula"
            required={true}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
        </label>

        <label>
          <p>Grupo sanguineo</p>
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
        <input type="submit" value="Save" className="input-save" />
      </form>
    </div>
  );
};

export default CreatePatient;
