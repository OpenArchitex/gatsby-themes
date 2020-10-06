import React from "react"
import ProjectsMDX from "../sections/projects"
import { Grid } from "theme-ui"

const Projects = () => (
    <Grid
        pt={100}
        pb={100}
        columns={[ 1, 2 ]}
        id="projects"
        sx={{
            h1: { gridColumn: `-1/1` },
        }}
    >
        <ProjectsMDX/>
    </Grid>
)

export default Projects;