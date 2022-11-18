import React, { useEffect, useRef } from "react";

import Odin from "../images/odin.svg";
import Learn from "../images/learn.svg";
import Laptop from "../images/laptop.svg";
import Connect from "../images/connect.svg";

// Can also be included with a regular script tag
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    var typed = new Typed(el.current, {
      strings: [
        "Be a PRO",
        "Showcase",
        "Your Projects ",
        "Skills",
        "Like a PRO",
      ],
      typeSpeed: 200,
      backSpeed: 200,
      showCursor: false,
      loop: true,
    });
  });

  return (
    <>
      {/* --------------------------------------------- Top section -------------------------------------- */}
      <div className="md:mt-28 my-12 w-10/12 mx-auto">
        {/* <h1 className="text-4xl font-medium hero-heading"> */}
        <h1 className="text-4xl sm:text-6xl text-gray-700  font-medium mx-auto pb-6 tracking-tighter  hero-heading text-center">
          Your Coding Journey Starts Here <br />
          <span className="color-primary" ref={el}></span> &nbsp;
        </h1>
        <p className="mb-4 text-xl text-gray-500 dark:text-gray-500 text-center">
          Our Projects showcase is free and supported by a <br />
          passionate open source community.
        </p>
        <div className="mt-12 text-center">
          <button className="rounded background-primary text-white py-3 px-6 font-medium ">
            Let's Showcase Your Skill
          </button>
        </div>
      </div>
      {/* ---------------------------------------------/ Top section -------------------------------------- */}
      {/* ----------------------------------------- image sectionn ------------------------------------ */}
      <div className="image">
        <img src={Odin} alt="" />
      </div>
      {/* ----------------------------------------- / image sectionn ------------------------------------ */}
      {/* -------------------------------------- how it work section ------------------------------------------ */}
      <div className="details bg-white py-20 text-center">
        <div className=" md:w-8/12  w-10/12 mx-auto">
          <h3 className="text-3xl text-gray-700 dark:text-gray-700 font-medium mb-5">
            How it works
          </h3>
          <p className="sm:text-lg text-center text-gray-500 lg:w-5/6   mx-auto">
            This is the website we wish we had when we were learning on our own.
            We scour the internet looking for solutions to our project's problem
            that we faced so we come up with an idea why don't we build one?
          </p>
          <div className=" d-flex mt-10 flex flex-wrap justify-between">
            {/* learn  */}
            <div className="p-5 flex-1 text-center ">
              <img
                src={Learn}
                alt="learn svg"
                className="h-20 sm:h-32 md:h-40 inline"
              />
              <br />
              <h4 className="font-medium text-xl mt-8 mb-4  text-gray-500">
                Learn
              </h4>
              <p className="px-8 sm:px-16 md:px-0 dark:text-gray-500">
                Learn from a curriculum with the best curated online tutorials,
                blogs, and courses.
              </p>
            </div>
            {/* learn  */}
            {/* build  */}
            <div className="p-5 flex-1 text-center">
              <img
                src={Laptop}
                alt="learn svg"
                className="h-20 sm:h-32 md:h-40 inline"
              />
              <br />
              <h4 className="font-medium text-xl mt-8 mb-4 text-gray-500">
                Build
              </h4>
              <p className="px-8 sm:px-16 md:px-0 dark:text-gray-500">
                Convert Theoretical knowledge to Practical. Learn, Code and
                Solve real problems.
              </p>
            </div>
            {/* build  */}
            {/* connect  */}
            <div className=" p-5 flex-1 text-center ">
              <img
                src={Connect}
                alt="learn svg"
                className="h-20 sm:h-32 md:h-40 inline"
              />
              <br />
              <h4 className="font-medium text-xl mt-8 mb-4 text-gray-500">
                Connect
              </h4>
              <p className="px-8 sm:px-16 md:px-0 dark:text-gray-500">
                You're not alone. Learn, Build, Showcase your s Skill and
                Projects and get hired.
              </p>
            </div>
            {/* connect  */}
          </div>
        </div>
      </div>
      {/* -------------------------------------- / how it work section ------------------------------------------ */}
      {/* ------------------------------------ marquee section -------------------------------------------- */}

      <div className="marquee py-16  bg-gray-100 text-gray-300 text-2xl font-bold  text-center">
        <div className="slider flex justify-between">
          <div className="slide-track ">
            <div className="slide hover:color-primary">HTML</div>
            <div className="slide">CSS</div>
            <div className="slide">JAVASCRIPT</div>
            <div className="slide">BOOTSTRAP</div>
            <div className="slide">TAILWIND</div>
            <div className="slide">MATERIAL</div>
            <div className="slide">BULMA</div>
            <div className="slide">PURE</div>
            <div className="slide">FOUNDATION</div>
            <div className="slide">REACT</div>
            <div className="slide">VUE</div>
            <div className="slide">ANGULAR</div>
            <div className="slide">NEXT</div>
            <div className="slide">NODE</div>
            <div className="slide">RUBY</div>
            <div className="slide">PYTHON</div>
            <div className="slide">DJANGO</div>
            <div className="slide">FLASK</div>
            <div className="slide">RAILS</div>
          </div>
        </div>
      </div>
      {/* ------------------------------------ / marquee section -------------------------------------------- */}
    </>
  );
};

export default Home;
