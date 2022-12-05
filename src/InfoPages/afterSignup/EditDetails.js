import React, { useContext, useEffect, useRef } from "react";

// ? database
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firabase.config";

// ? context
import GlobalContext from "../../context/GlobalContext";

// ? routing
import { useNavigate } from "react-router-dom";

// ? toast
import { toast } from "react-toastify";

const EditDetails = () => {
  // * state
  const emailRef = useRef();
  const nameRef = useRef();
  const locationRef = useRef();
  const aboutRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const instagramRef = useRef();
  const twitterRef = useRef();

  // * routing
  const navigate = useNavigate();

  // * context
  const data = useContext(GlobalContext);
  const uid = data.global.uid;

  // * get User Details
  useEffect(() => {
    const detail = async () => {
      const userRef = doc(db, "userDetails", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap) {
        // ref values set
        nameRef.current.value = userSnap.data().name;
        aboutRef.current.value = userSnap.data().about;
        emailRef.current.value = userSnap.data().email;
        locationRef.current.value = userSnap.data().location;
        githubRef.current.value = userSnap.data().social.github;
        instagramRef.current.value = userSnap.data().social.instagram;
        twitterRef.current.value = userSnap.data().social.twitter;
        linkedinRef.current.value = userSnap.data().social.linkedin;
      } else {
        console.log("unable to get data");
      }
    };
    detail();
  }, [uid]);

  //   // * lifecycle
  //   useEffect(() => {
  //     if (!data.global.email) {
  //       navigate("/login");
  //     }
  //   });

  //   Todo ------------------------- function --------------------
  const handleSubmit = async (e) => {
    // value check
    if (
      emailRef.current.value &&
      locationRef.current.value &&
      aboutRef.current.value &&
      nameRef.current.value
    ) {
      e.preventDefault();
      const details = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        location: locationRef.current.value,
        about: aboutRef.current.value,
        social: {
          github: githubRef.current.value,
          linkedin: linkedinRef.current.value,
          instagram: instagramRef.current.value,
          twitter: twitterRef.current.value,
        },
      };
      await setDoc(doc(db, "userDetails", data.global.uid), {
        ...details,
      })
        .then((res) => {
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
      <h2 className="text-3xl font-bold text-center">Update your details</h2>
      <div className="lg:w-2/5 w-10/12 p-7 rounded mx-auto bg-white mt-7">
        <form method="post">
          <div className="mb-5">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              className="my-1 w-full rounded p-2 border placeholder-gray-700 "
              required
              ref={nameRef}
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
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={emailRef}
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
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={locationRef}
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
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={aboutRef}
            ></textarea>
          </div>
          <p className="text-sm font-medium mb-5 text-gray-400  ">OPTIONAL</p>
          <div className="mb-5">
            <label htmlFor="github" className="text-sm font-medium">
              Github Link
            </label>
            <br />
            <input
              type="text"
              name="github"
              id="github"
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={githubRef}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="linkedin" className="text-sm font-medium">
              Linkedin Link
            </label>
            <br />
            <input
              type="text"
              name="linkedin"
              id="linkedin"
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={linkedinRef}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="instagram" className="text-sm font-medium">
              Instagram Link
            </label>
            <br />
            <input
              type="text"
              name="instagram"
              id="instagram"
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={instagramRef}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="twitter" className="text-sm font-medium">
              Twitter Link
            </label>
            <br />
            <input
              type="text"
              name="twitter"
              id="twitter"
              className="my-1 w-full rounded p-2 border placeholder-gray-700"
              required
              ref={twitterRef}
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
