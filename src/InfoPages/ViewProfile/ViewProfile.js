import React, { useEffect, useState } from "react";

// ? database
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firabase.config";

// ? icons
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// ? image
import Avatar from "../../images/avatar.png";

// ?component
import ProjectViewCard from "../../components/ProjectViewCard";

// ?routing
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  // * states
  const [user, setUser] = useState("");
  const [projects, setProjects] = useState([]);
  const params = useParams();

  const uid = params.id;

  // * get User Details
  useEffect(() => {
    const detail = async () => {
      const userRef = doc(db, "userDetails", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap) {
        // setting user Details
        setUser(userSnap.data());
      } else {
        console.log("unable to get data");
      }
    };
    detail();
  }, [uid]);

  // * get projects
  useEffect(() => {
    const detail = async () => {
      const userRef = doc(db, "userProjects", uid);
      getDoc(userRef).then((res) => {
        if (res !== "undefined") {
          if (res) {
            // setting user Details
            setProjects(res.data());
          } else {
            console.log("unable to get data");
          }
        }
      });
    };
    detail();
  }, [uid]);

  return (
    <div className="bg-gray-100 py-11">
      <div className="mx-auto md:w-6/12 w-10/12 mb-11">
        <div className="p-7 rounded text-center bg-white text-gray-700">
          <div className="">
            <img src={Avatar} alt="" width="70px" className="mx-auto" />
          </div>
          <div className="mx-auto">
            <h2 className="text-2xl mt-3 font-semibold text-gold">
              {user.name}
            </h2>
            <h5 className="text-sm text-gray-600 mb-5 font-medium ">
              <span className="text-gray-400">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              &nbsp;
              {user.location}
            </h5>
            <p className=" text-gray-500 text-sm">{user.about}</p>
            <p className="mt-3">
              {user.social?.linkedin ? (
                <a
                  href={user.social?.linkedin}
                  className="mx-1"
                  target="_black"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="hover:text-gold"
                  />
                </a>
              ) : (
                ""
              )}

              {user.social?.github ? (
                <a href={user.social?.github} className="mx-1" target="_black">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-gold"
                  />
                </a>
              ) : (
                ""
              )}

              {user.social?.instagram ? (
                <a
                  href={user.social?.instagram}
                  className="mx-1"
                  target="_black"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-gold"
                  />
                </a>
              ) : (
                ""
              )}

              {user.social?.twitter ? (
                <a href={user.social?.twitter} className="mx-1" target="_black">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-gold"
                  />
                </a>
              ) : (
                ""
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 mx-auto w-10/12 ">
        <h1 className="text-2xl font-semibold mb-5 text-gray-600">Projects</h1>
        <div className="md:flex lg:justify-start justify-between flex-wrap">
          {projects?.projects
            ? projects?.projects.map((project) => (
                <ProjectViewCard key={project.uid} data={project} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
