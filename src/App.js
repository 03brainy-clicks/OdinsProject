import { useState } from "react";
import "./App.css";

//? component
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

//? pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Credit from "./pages/Credit";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import Details from "./InfoPages/afterSignup/Details";
import AddProject from "./pages/AddProject";
import EditDetails from "./InfoPages/afterSignup/EditDetails";
import EditProject from "./InfoPages/Projects/EditProject";

// ? routing
import { Route, Routes } from "react-router-dom";

// ? context
import GlobalContext from "./context/GlobalContext";

// ? toast
import { ToastContainer } from "react-toastify";

function App() {
  // * state
  const [global, setGlobal] = useState({
    uid: "",
    email: "",
    projects: [],
  });

  return (
    <>
      <GlobalContext.Provider value={{ global, setGlobal }}>
        <ToastContainer limit={3} />
        <Navigation />
        <Routes>
          {/* profile  */}
          <Route path="/profile/:uid/editProfile" element={<EditDetails />} />
          <Route path="/profile/:uid" exact element={<Profile />} />
          {/* projects  */}
          <Route path="/project/:uid/editProject" element={<EditProject />} />
          <Route path="/project/addProject" element={<AddProject />} />
          <Route path="/details" exact element={<Details />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/credit" exact element={<Credit />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
