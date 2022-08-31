import React from "react"
import { useParams } from "react-router-dom"
import { ProjectList } from "../projectList"
import { IconButton, Link } from "@mui/material"
import { GitHub } from "@mui/icons-material"

import "../styles/projectDisplay.css"

function ProjectDisplay() {
  const { id } = useParams()
  const projectIndex = id ? parseInt(id) : null
  const project = projectIndex ? ProjectList[projectIndex - 1] : null
  if (!project) return <div> Project not Found!</div>

  return (
    <div className="project">
      <IconButton
        component={Link}
        href={project.appLink}
        target="_blank"
        rel="noopener"
      >
        <h1> {project.name}</h1>
      </IconButton>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton
        component={Link}
        href={project.githubLink}
        target="_blank"
        rel="noopener"
      >
        <GitHub />
      </IconButton>
    </div>
  )
}

export default ProjectDisplay
