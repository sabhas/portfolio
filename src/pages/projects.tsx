import ProjectItem from "../components/projectItem"
import { ProjectList } from "../projectList"

import "../styles/projects.css"

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
