import React from "react"
import AboutMDX from "../sections/about"
import { Grid, Box } from "theme-ui";

const About = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
        id="about"
    >
        <Box>
            <AboutMDX/>
        </Box>
    </Grid>
)

export default About;