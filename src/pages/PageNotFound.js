import React from "react";

// ? image
import SvgPNF from "../images/svgPNF";

// ? routing
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-blue-400 text-white pb-5 ">
      <div className="w-10/12 mx-auto">
        <h1 className="text-center pt-12 text-4xl font-semibold">
          Looks like you're lost, Odinite!
        </h1>
        <h5 className="text-center text-xl font-medium mt-5 ">
          Let's get back to{" "}
          <Link to="/">
            <span className="hover:text-gold">HOME</span>
          </Link>
        </h5>
      </div>
      <div className="md:w-2/3 mx-auto">
        <SvgPNF />
      </div>
    </div>
  );
};

export default PageNotFound;
