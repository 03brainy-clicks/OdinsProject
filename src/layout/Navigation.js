import React, { useContext, useState } from "react";

// ? routing
import { Link, useNavigate } from "react-router-dom";

// ? components
import MenuWithAuth from "../components/MenuWithAuth";
import MenuWithoutAuth from "../components/MenuWithoutAuth";

//  ? authentication logout
import { auth } from "../Firebase/Firabase.config";
import { signOut } from "firebase/auth";

// ? context
import GlobalContext from "../context/GlobalContext";

// ? icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// ? image
import Odin from "../images/odin-2.svg";

//? toast
import { toast } from "react-toastify";

const Navigation = () => {
  // * state
  const data = useContext(GlobalContext);
  const [dropDown, setDropDown] = useState(false);

  // * routing
  const navigate = useNavigate();

  // Todo --------------------- functions -------------------
  //  Logout
  const handleLogout = () => {
    signOut(auth)
      .then((res) => {
        toast.success("Logout Successfully");
        data.setGlobal({
          ...data.global,
          projects: [],
          uid: "",
          email: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // menu drop down fuction
  const menuButton = () => {
    setDropDown(!dropDown);
  };

  // Todo --------------------- functions -------------------

  return (
    <>
      <div className="bg-white">
        <div className="flex mx-auto w-10/12 my-2 items-center justify-between">
          {/* ------ logo ----------------- */}
          <div className="logo">
            <Link to="/">
              <img src={Odin} alt="logo" />
            </Link>
          </div>
          {/* ------ /logo ----------------- */}
          {/* ------------------- menu -------------- */}
          {data.global.email ? (
            <MenuWithAuth
              email={data.global.email}
              uid={data.global.uid}
              handleLogout={handleLogout}
            />
          ) : (
            <MenuWithoutAuth />
          )}
          {/* -----------------/ menu----------------- */}

          {/* hamburger  */}
          <button
            className="rounded background-primary w-10 h-10 text-white py-2 md:hidden block px-3 "
            onClick={menuButton}
          >
            <FontAwesomeIcon icon={dropDown ? faTimes : faBars} />
          </button>
          {/* hamburger  */}
        </div>
      </div>
      {/* ---------------------------- dropDown  -----------------------------*/}
      <div className="menu">
        {dropDown ? (
          <ul className="flex flex-col justify-center items-center menu pb-7 md:hidden">
            {data.global.email ? (
              <Link to="/dashboard">
                <li
                  className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2  my-2  "
                  onClick={menuButton}
                >
                  Dashboard
                </li>
              </Link>
            ) : (
              <Link to="/">
                <li
                  className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2  my-2  "
                  onClick={menuButton}
                >
                  Home
                </li>
              </Link>
            )}
            {/* ------------------------------------------------ */}
            <Link to="/credit">
              <li
                className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2 my-2  "
                onClick={menuButton}
              >
                Credit
              </li>
            </Link>
            {/* -------------------------------------------- */}
            {data.global.email ? (
              <Link to={`/profile/${data.global.uid}`}>
                <li
                  className="mx-4 border-b-2 border-white hover:text-gray-700
       hover:border-gray-400 py-2
       "
                  onClick={menuButton}
                >
                  {data.global.email}
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li
                  className="mx-4 border-b-2 border-white hover:text-gray-700 my-2
hover:border-gray-400 py-2
"
                  onClick={menuButton}
                >
                  Sign in
                </li>
              </Link>
            )}
            {/* --------------------------------------------- */}

            <li className="mx-4 my-2">
              {data.global.email ? (
                <button
                  className="rounded background-primary text-white py-2 px-3 "
                  onClick={() => {
                    handleLogout();
                    menuButton();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/signup">
                  <button
                    className="rounded background-primary text-white py-2 px-3 "
                    onClick={menuButton}
                  >
                    Get Started
                  </button>
                </Link>
              )}
            </li>
          </ul>
        ) : null}
      </div>
      {/* ---------------------------- / dropDown  -----------------------------*/}
    </>
  );
};

export default Navigation;
