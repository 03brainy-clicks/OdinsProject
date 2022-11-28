import React from "react";

// ? routing
import { Link } from "react-router-dom";

const MenuWithAuth = (props) => {
  // * logout
  const { email, handleLogout } = props;

  return (
    <ul className="md:flex ml-auto text-gray-500 font-medium text-sm items-center md:bloack hidden">
      {/* ---- dashboard ---------- */}
      <Link to="/dashboard">
        <li className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2   ">
          Dashboard
        </li>
      </Link>
      {/* ---- /dashboard ---------- */}
      {/* --------- credit ---------- */}
      <Link to="/credit">
        <li className="mx-4 border-b-2 hover:text-gray-700 hover:border-gray-400  border-white py-2   ">
          Credit
        </li>
      </Link>
      {/* --------- / credit ---------- */}
      {/* -------- user Profile  -------- */}
      <Link to="/profile">
        <li
          className="mx-4 border-b-2 border-white hover:text-gray-700
 hover:border-gray-400 py-2
 "
        >
          {email}
        </li>
      </Link>
      {/* -------- user Profile -------- */}

      <li className="mx-4">
        <button
          className="rounded background-primary text-white py-2 px-3 "
          onClick={handleLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

export default MenuWithAuth;
