import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import DonorRegistrationDetails from "./components/Dashboard/Donor";
import Navbar from "./common/Nabvar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import GlobalRoutes from "./Pages/GlobalRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} exact path="/" />
          <Route element={<GlobalRoutes />} path="/*" />
          {/* <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/search"
          />
          <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/contact"
          />
          <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/dashboard"
          />
          <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/login"
          />
          <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/blood-request-form"
          />
          <Route
            element={
              <>
                <Navbar />
                <DonorRegistrationDetails />
              </>
            }
            path="/live-blood-camp"
          /> */}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
