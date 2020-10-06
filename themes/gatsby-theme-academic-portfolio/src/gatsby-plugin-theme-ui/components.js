import React from "react"
import ProjectCard from "../components/project-card"

const components = {
    ProjectCard: ({title, link, bg, textColor, thumbnailPath, children}) => (
        <ProjectCard title={title} link={link} bg={bg} textColor={textColor} thumbnailPath={thumbnailPath}>
            {children}
        </ProjectCard>
    ),
}

export default components