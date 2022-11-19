import React from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";

// routing
import { Link } from "react-router-dom";

// image
import Odin from "../images/odin-2.svg";

const Footer = () => {
  return (
    <div className="py-12">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        {/* --------------------- social  ----------- */}
        <div className="md:w-7/12">
          <div className="logo">
            <Link to="/">
              <img src={Odin} alt="logo" />
            </Link>
          </div>
          <p className="my-7 text-gray-500">
            High quality coding education created by an <br />
            Open-Source community.
          </p>
          <div className="mt-5">
            <a href="https://www.github.com/03brainy-clicks/" target="_black">
              <FontAwesomeIcon
                icon={faGithub}
                className="fa-xl mr-4 text-gray-600 hover:text-gold"
              />
            </a>
            <a href="https://www.theodinproject.com/" target="_black">
              {" "}
              <FontAwesomeIcon
                icon={faEarth}
                className="fa-xl text-gray-600 hover:text-gold"
              />
            </a>
          </div>
        </div>
        {/* --------------------- / social  ----------- */}
        {/* ---------------------- form ------------------------- */}
        <div className="md:w-5/12 md:block hidden">
          <h2 className="text-2xl text-gray-600 font-semibold">
            Let's get started for free
          </h2>
          <form action="" className="mt-5 border w-fit p-1 rounded">
            <input
              type="text"
              className="w-auto py-1 outline-white px-2"
              placeholder="Email Address"
            />
            <Link to="/signup">
              <button className="my-1  mx-2 py-2 px-5 text-white rounded text-sm background-primary">
                Get Started
              </button>
            </Link>
          </form>
        </div>
        {/* ---------------------- /form ------------------------- */}
      </div>
    </div>
  );
};

export default Footer;
