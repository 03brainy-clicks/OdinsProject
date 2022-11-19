import React, { useContext, useState } from "react";

// ? routing
import { Link } from "react-router-dom";

// ? authentication
import { auth } from "../Firebase/Firabase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// ? context
import GlobalContext from "../context/GlobalContext";

//? toast
import { toast } from "react-toastify";

const Login = () => {
  // * states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // * context
  const data = useContext(GlobalContext);

  // Todo ------------------------ function ----------------------------
  //  user login
  const handleSubmit = (e) => {
    if (email && password) {
      e.preventDefault();
      toast.info("Processing");
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          // setting details
          data.setGlobal({
            ...data.global,
            email: res.user.email,
          });

          // setting state to initial
          setEmail("");
          setPassword("");
        })
        .then(() => {
          toast.success("Login Successful");
        })
        .catch((error) => {
          toast.error(`${error}`);
          // setting state to initial
          setEmail("");
          setPassword("");
          console.log(error);
        });
    }
  };
  // Todo ------------------------ /function ----------------------------

  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">
        Sign in to your account
      </h2>
      <div className="text-center mt-1 text-sm text-gray-500">
        Or&nbsp;
        <Link to="/signup">
          <span className="text-gold text-medium">
            sign up for a new account
          </span>
        </Link>
      </div>
      <div className="login  mx-auto lg:w-3/12  md:6/12 w-10/12 mt-11 p-7 bg-white rounded">
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

          {/* password  */}
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
          <div>
            <Link to="/forgotPassword">
              <span className="text-sm text-gray-600 ">
                Forgot your password?
              </span>
            </Link>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
