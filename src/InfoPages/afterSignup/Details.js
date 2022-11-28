import React, { useContext, useEffect, useState } from "react";

// ? database
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firabase.config";

// ? context
import GlobalContext from "../../context/GlobalContext";

// ? routing
import { useNavigate } from "react-router-dom";

// ? toast
import { toast } from "react-toastify";

const Details = () => {
  // * state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");

  // * routing
  const navigate = useNavigate();

  // * context
  const data = useContext(GlobalContext);

  // * lifecycle
  useEffect(() => {
    if (!data.global.email) {
      navigate("/login");
    }
  });

  //   Todo ------------------------- function --------------------
  const handleSubmit = async (e) => {
    // value check
    if (email && name && location && about) {
      e.preventDefault();
      const details = {
        name: name,
        email: email,
        location: location,
        about: about,
      };
      await setDoc(doc(db, "userDetails", data.global.uid), {
        ...details,
      })
        .then((res) => {
          //   reseting value
          setName("");
          setEmail("");
          setLocation("");
          setAbout("");

          // toast
          toast.success("Details Added");

          // redirect
          navigate("/dashboard");
        })
        .catch((e) => {
          toast.error(e);
        });
    }
  };

  //   Todo ------------------------- / function --------------------
  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">Enter your details</h2>
      <div className="lg:w-2/5 w-10/12 p-7 rounded mx-auto bg-white mt-7">
        <form method="post">
          <div className="mb-5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>{" "}
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="my-1 w-full rounded p-2 border "
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <br />
            <input
              type="text"
              name="location"
              id="location"
              className="my-1 w-full rounded p-2 border "
              required
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="about" className="text-sm font-medium">
              About
            </label>
            <textarea
              name="about"
              id="about"
              rows="3"
              className="my-1 w-full rounded p-2 border "
              required
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
