import CreatePatient from "./components/CreatePatient";
import Patients from "./components/Patients";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-app">
      <h1 className="title-welcome">¡Bienvenido!</h1>
      <div className="container-options">
        <CreatePatient />
        <Patients />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
