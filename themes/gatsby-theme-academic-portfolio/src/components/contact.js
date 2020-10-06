import React from "react";
import ContactMDX from "../sections/contact"
import {Box, Grid, Image} from "theme-ui";
import ContactUs from "../images/contactus.svg";

const Contact = () => (
    <Grid
        pt={100}
        pb={100}
        pl={4}
        pr={4}
        columns={[ 1, 2 ]}
        id="contact"
    >
        <Box sx={{
            textAlign: 'center'
        }}>
            <Image src={ContactUs}
                   sx={{
                       maxWidth: '80%',
                       minWidth: '300px',
                       transform: 'rotate(-5deg)'
                   }}
            />
        </Box>
        <Box>
            <ContactMDX/>
        </Box>
    </Grid>
)

export default Contact;