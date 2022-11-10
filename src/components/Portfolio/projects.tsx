import ProjectItem from "./projectItem"
import { ProjectList } from "./projectList"

import "./projects.scss"

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx + 1}
              name={project.name}
              image={project.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
