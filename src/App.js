import { useState } from "react";
import "./App.css";

// component
import Footer from "./layout/Footer";
import Navigation from "./layout/Navigation";

// pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Credit from "./pages/Credit";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

// routing
import { Route, Routes } from "react-router-dom";

// context
import GlobalContext from "./context/GlobalContext";

function App() {
  // state
  const [global, setGlobal] = useState({
    email: "",
    projects: [],
  });

  return (
    <>
      <GlobalContext.Provider value={{ global, setGlobal }}>
        <Navigation />
        <Routes>
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/credit" exact element={<Credit />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
