import React from "react"
import { useParams } from "react-router-dom"
import { ProjectList } from "./projectList"
import { IconButton, Link } from "@mui/material"
import { GitHub } from "@mui/icons-material"

import "./projectDisplay.scss"

type Props = {
  href: string
  children: React.ReactNode
}

const LinkButton = ({ href, children }: Props) => (
  <IconButton
    sx={{
      ":hover": {
        backgroundColor: "rgb(255, 215, 0, 0.2)",
      },
    }}
    component={Link}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </IconButton>
)

function ProjectDisplay() {
  const { id } = useParams()
  const projectIndex = id ? parseInt(id) : null
  const project = projectIndex ? ProjectList[projectIndex - 1] : null
  if (!project) return <div> Project not Found!</div>

  return (
    <div className="project">
      <LinkButton href={project.appLink}>
        <h1> {project.name}</h1>
      </LinkButton>
      <a href={project.appLink} target="_blank" rel="noreferrer">
        <img src={project.image} alt={project.name} />
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <LinkButton href={project.githubLink}>
        <GitHub />
      </LinkButton>
    </div>
  )
}

export default ProjectDisplay
