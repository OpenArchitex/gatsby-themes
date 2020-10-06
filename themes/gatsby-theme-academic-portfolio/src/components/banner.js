import React from "react"
import { Container, Image, Box, NavLink } from 'theme-ui'
import banner from '../images/banner.svg'
import jumbotron from '../images/jumbotron.jpg'
import BannerMDX from "../sections/banner"

const Banner = () => (
    <Container
        pt={100}
        pb={100}
        sx={{
            textAlign: 'center',
            backgroundImage: `url(${jumbotron})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat'
        }}
    >
        <Image src={banner}
            sx={{
                maxWidth: '20%',
                minWidth: '200px'
            }}
        />
        <Box sx={{
            color: "black"
        }}>
            <BannerMDX/>
        </Box>
        <Box as='nav'
            sx={{
                color: 'grey',
                fontSize: 'large'
            }}
        >
            <NavLink href='#about' p={2}>
                About
            </NavLink>
            <NavLink href='#projects' p={2}>
                Projects
            </NavLink>
            <NavLink href='#contact' p={2}>
                Contact
            </NavLink>
        </Box>
    </Container>
)

export default Banner;