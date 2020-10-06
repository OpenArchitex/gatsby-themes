import React from "react"
import TeachingMDX from "../sections/teaching"
import {Box, Grid} from "theme-ui";

const Teaching = () => (
    <Grid
        pt={50}
        pb={50}
        pl={4}
        pr={4}
        id="teaching"
    >
        <Box>
            <TeachingMDX/>
        </Box>
    </Grid>
)

export default Teaching;