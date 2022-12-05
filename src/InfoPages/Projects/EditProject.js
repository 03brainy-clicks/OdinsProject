import React, { useContext, useEffect, useState, useRef } from "react";

// ? database
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firabase.config";

// ? context
import GlobalContext from "../../context/GlobalContext";

// ? toast
import { toast } from "react-toastify";

// ? routing
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  // * state
  const titleRef = useRef();
  const codeRef = useRef();
  const deployRef = useRef();
  const descriptionRef = useRef();
  const [projects, setProjects] = useState([]);
  const [current, setCurrent] = useState({});

  // *  id
  const projectId = useParams();

  // *  routing;
  const navigate = useNavigate();

  // *  context
  const data = useContext(GlobalContext);

  //* get values
  useEffect(() => {
    const proFetch = async () => {
      const userRef = doc(db, "userProjects", data.global.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.data() !== undefined) {
        const proj = userSnap.data();
        setProjects(proj.projects);

        // setting ref values
        const value = proj.projects.filter((project) => {
          if (project.uid === projectId.uid) {
            return project;
          }
          return 0;
        });
        setCurrent(value[0]);
        titleRef.current.value = value[0].title;
        codeRef.current.value = value[0].codeLink;
        deployRef.current.value = value[0].deployLink;
        descriptionRef.current.value = value[0].description;
      } else {
        console.log("No data find");
      }
    };
    proFetch();
  }, [data.global.uid, projectId.uid]);

  //   Todo ------------------------- function --------------------

  //   UpdateProjects
  const handleUpdate = async (e) => {
    //value check
    if (
      titleRef.current.value &&
      codeRef.current.value &&
      deployRef.current.value &&
      descriptionRef.current.value
    ) {
      e.preventDefault();
      const project = {
        title: titleRef.current.value,
        deployLink: deployRef.current.value,
        codeLink: codeRef.current.value,
        description: descriptionRef.current.value,
        uid: current.uid,
      };
      const allProjects = projects.map((proj) => {
        if (proj.uid === projectId.uid) {
          return project;
        }
        return proj;
      });
      console.log(allProjects);

      if (projects) {
        await setDoc(doc(db, "userProjects", data.global.uid), {
          projects: [...allProjects],
        }).then((res) => {
          toast.success("Project Added");
          navigate("/dashboard");
        });
      } else {
        await setDoc(doc(db, "userProjects", data.global.uid), {
          projects: [...allProjects],
        }).then((res) => {
          toast.success("Project Added");
          navigate("/dashboard");
        });
      }
    }
  };

  //   deleteProject
  const handleDelete = async (e) => {
    //value check
    e.preventDefault();

    const allProjects = projects.filter((proj) => {
      if (proj.uid !== projectId.uid) {
        return proj;
      }
      return 0;
    });

    if (projects) {
      await setDoc(doc(db, "userProjects", data.global.uid), {
        projects: [...allProjects],
      }).then((res) => {
        toast.success("Project Added");
        navigate("/dashboard");
      });
    } else {
      await setDoc(doc(db, "userProjects", data.global.uid), {
        projects: [...allProjects],
      }).then((res) => {
        toast.success("Project Added");
        navigate("/dashboard");
      });
    }
  };

  //   Todo ------------------------- / function --------------------

  return (
    <div className="bg-gray-100 pt-20 pb-12">
      <h2 className="text-3xl font-bold text-center">Edit Project Details</h2>
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
              ref={titleRef}
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
              ref={codeRef}
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
              ref={deployRef}
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
              ref={descriptionRef}
            ></textarea>
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className=" rounded background-primary text-white py-2 px-3 w-full"
              onClick={handleUpdate}
            >
              Add Project
            </button>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className=" rounded background-primary-outline text-white py-2 px-3 w-full"
              onClick={handleDelete}
            >
              Delete Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
