import React, { useState } from "react";

// routing
import { useNavigate } from "react-router-dom";

// auth
import { auth } from "../Firebase/Firabase.config";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  // states
  const [email, setEmail] = useState("");

  //   navigate routing
  const navigate = useNavigate();

  // reset password for got password
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
        setEmail("");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">Reset Password</h2>
      <div className="forgot password mx-auto lg:w-3/12  md:6/12 w-10/12 mt-11 p-7 bg-white rounded">
        <form method="post">
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
          <div className="mt-10">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={resetPassword}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
