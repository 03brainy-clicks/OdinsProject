import React from "react";

// ? icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLink,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = (props) => {
  const { title, codeLink, description, deployLink } = props.data;
  return (
    <div className="md:w-4/12 w-full lg:p-3  lg:my-0 my-3 overflow-hidden projectCard">
      <div className="p-5 bg-white  rounded">
        <div className="relative">
          <iframe
            title={title}
            src={deployLink}
            className="w-full rounded frame overflow-auto"
            scrolling="no"
            height="250px"
          ></iframe>
          <span className="absolute top-3 right-3 z-10 ">
            <button className="rounded py-1 px-2 bg-white hover:text-gold">
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </span>
        </div>
        <div className="mt-5">
          <h4 className="text-lg font-bold text-gray-700">{title}</h4>
          <p className="text-gray-600">{description}</p>
          <p className="mt-3 text-gray-500">
            <a href={codeLink} className="hover:text-gold" target="_black">
              <FontAwesomeIcon icon={faCode} />
            </a>
            &nbsp;&nbsp;
            <a href={deployLink} className="hover:text-gold" target="_black">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
