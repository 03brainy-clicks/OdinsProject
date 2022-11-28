import React, { useContext, useEffect, useState } from "react";

// ? database
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/Firabase.config";

// ? context
import GlobalContext from "../context/GlobalContext";

// ? uuid
import { v4 as uuidv4 } from "uuid";

// ? toast
import { toast } from "react-toastify";

// ? routing
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  // * state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [deploy, setDeploy] = useState("");
  const [projects, setProjects] = useState("");

  // *  routing;
  const navigate = useNavigate();

  // *  context
  const data = useContext(GlobalContext);

  // * get projects
  useEffect(() => {
    const detail = async () => {
      const userRef = doc(db, "userProjects", "FjfAoMjC78M5VSOEwAzd");
      const userSnap = await getDoc(userRef);
      if (userSnap) {
        // setting user Details
        setProjects(userSnap.data());
      } else {
        console.log("unable to get data");
      }
    };
    detail();
  }, [data]);

  //   Todo ------------------------- function --------------------

  //   setProjects
  const handleSubmit = async (e) => {
    //value check
    if (title && code && deploy && description) {
      e.preventDefault();
      const project = {
        title: title,
        deployLink: deploy,
        codeLink: code,
        description: description,
        uid: uuidv4(),
      };
      await setDoc(doc(db, "userProjects", data.global.uid), {
        projects: [project, ...projects.projects],
      })
        .then((res) => {
          // reseting value
          setCode("");
          setDeploy("");
          setDescription("");
          setTitle("");

          // success
          toast.success("Project added");

          // redirect
          navigate("/dashboard");
        })
        .catch((e) => toast.error(e));
    }
  };
  //   Todo ------------------------- / function --------------------

  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">Enter Project Details</h2>
      <div className="lg:w-1/4 w-10/12 p-7 rounded mx-auto bg-white mt-7">
        <form method="post">
          <div className="mb-3">
            <label htmlFor="Title" className="text-sm font-medium">
              Title
            </label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              className="my-1 w-full rounded p-2 border "
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="code" className="text-sm font-medium">
              Code Link
            </label>
            <br />
            <input
              type="text"
              name="code"
              id="code"
              className="my-1 w-full rounded p-2 border "
              required
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deploy" className="text-sm font-medium">
              Deployment Link
            </label>
            <br />
            <input
              type="text"
              name="deploy"
              id="deploy"
              className="my-1 w-full rounded p-2 border "
              required
              value={deploy}
              onChange={(e) => {
                setDeploy(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="3"
              className="my-1 w-full rounded p-2 border "
              required
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mt-7">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleSubmit}
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
