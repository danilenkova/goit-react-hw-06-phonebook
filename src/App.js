import Header from "./components/header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
