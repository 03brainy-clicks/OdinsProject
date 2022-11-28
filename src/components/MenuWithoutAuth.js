import React from "react";

// ? routing
import { Link } from "react-router-dom";

const MenuWithoutAuth = () => {
  return (
    <ul className="md:flex ml-auto text-gray-500 font-medium text-sm items-center md:bloack hidden">
      {/* ---- home ---------- */}
      <Link to="/">
        <li className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2   ">
          Home
        </li>
      </Link>
      {/* ---- /home ---------- */}
      {/* --------- credit ---------- */}
      <Link to="/credit">
        <li className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2   ">
          Credit
        </li>
      </Link>
      {/* --------- / credit ---------- */}
      {/* -------- login -------- */}
      <Link to="/login">
        <li
          className="mx-4 border-b-2 border-white hover:text-gray-700
 hover:border-gray-400 py-2
 "
        >
          Sign in
        </li>
      </Link>
      {/* -------- login -------- */}

      <Link to="/signup">
        <li className="mx-4">
          <button className="rounded background-primary text-white py-2 px-3 ">
            Get Started
          </button>
        </li>
      </Link>
    </ul>
  );
};

export default MenuWithoutAuth;
