import React from "react";
import PROJECTS from "../data/projects";

const Project = (props) => {
  const { title, image, desciption, link, linktext } = props.projectval;
  return (
    <div style={{ display: "inline-block", width: 300, margin: 10 }}>
      <h3>{title}</h3>
      <img src={image} alt="profile" style={{ width: 200, height: 120 }} />
      <p>{desciption}</p>
      <a href={link} target="_blank">
        {linktext}{" "}
      </a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECTS.map((PROJECT_OBJ) => (
        <Project key={PROJECT_OBJ.id} projectval={PROJECT_OBJ} />
      ))}
    </div>
  </div>
);

export default Projects;
