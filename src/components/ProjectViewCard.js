import React from "react";

// ? icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectViewCard = (props) => {
  const { title, codeLink, description, deployLink } = props.data;

  return (
    <div className="md:w-4/12 w-full lg:p-3  lg:my-0 my-3 overflow-hidden projectCard max-h-full">
      <div className="p-5 bg-white  rounded">
        <div className="relative">
          <iframe
            title={title}
            src={deployLink}
            className="w-full rounded frame overflow-auto"
            scrolling="no"
            height="250px"
          ></iframe>
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

export default ProjectViewCard;
