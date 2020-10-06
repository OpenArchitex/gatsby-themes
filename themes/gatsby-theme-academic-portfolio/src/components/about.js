import React from "react"
import AboutMDX from "../sections/about"
import { Grid, Box, Image } from "theme-ui";
import AboutUs from '../images/aboutus.svg'

const About = () => (
    <Grid
        pt={100}
        pb={100}
        pl={4}
        pr={4}
        columns={[ 1, 1, 1, 1, 2 ]}
        id="about"
    >
        <Box>
            <AboutMDX/>
        </Box>
        <Box sx={{
            textAlign: 'center'
        }}>
            <Image src={AboutUs}
                   sx={{
                       maxWidth: '80%',
                       minWidth: '300px',
                       transform: 'rotate(5deg)'
                   }}
            />
        </Box>
    </Grid>
)

export default About;