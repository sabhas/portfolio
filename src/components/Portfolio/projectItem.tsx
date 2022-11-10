import React from "react"
import { useNavigate } from "react-router-dom"

type Props = {
  image: any
  name: string
  id: number
}

function ProjectItem({ image, name, id }: Props) {
  const navigate = useNavigate()
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id)
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1 className="title"> {name} </h1>
    </div>
  )
}

export default ProjectItem
