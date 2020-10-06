import React from "react"
import {Container, Image, Box} from 'theme-ui'
import profilePic from '../images/profile-pic.jpg'
import jumbotron from '../images/jumbotron.jpg'
import BannerMDX from '../sections/banner'
import CustomNavLinks from '../sections/custom-nav-links'

const Banner = () => (
    <Container
        pt={100}
        sx={{
            textAlign: 'center',
            backgroundImage: `url(${jumbotron})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <Image src={profilePic}
            sx={{
                maxWidth: '20%',
                minWidth: '200px',
                borderRadius: '50%'
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
            <CustomNavLinks />
        </Box>
    </Container>
)

export default Banner;