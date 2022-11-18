import React, { useContext, useState } from "react";
// routing
import { Link, useNavigate } from "react-router-dom";

// authentication
import { auth } from "../Firebase/Firabase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

// context
import GlobalContext from "../context/GlobalContext";

const Signup = () => {
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  // context
  const data = useContext(GlobalContext);

  // routing
  const navigate = useNavigate();

  //  user register
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user.email);
        // setting value
        data.setGlobal({
          ...data.global,
          email: res.user.email,
        });
        // setting form value to initial
        setUsername("");
        setEmail("");
        setPassword("");
        setCpassword("");

        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">Sign up for free</h2>
      <div className="text-center mt-1 text-sm text-gray-500">
        Or&nbsp;
        <Link to="/login">
          <span className="text-gold text-medium">
            sign in to your existing account
          </span>
        </Link>
      </div>
      <div className="singup mx-auto lg:w-3/12 md:6/12 w-10/12 mt-11 p-7 bg-white rounded">
        <form method="post">
          {/* username  */}
          <div className="mb-5">
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="my-1 w-full rounded p-2 border "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          {/* email */}
          <div className="mb-5">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="my-1 w-full rounded p-2 border "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* confirm password  */}
          <div className="mb-5">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="mt-1 w-full rounded p-2 border "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* password  */}
          <div className="mb-5">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="mt-1 w-full rounded p-2 border "
              required
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
