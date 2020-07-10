import React from "react"
import { Container, Text, Image, Box, NavLink } from 'theme-ui'
import logo from '../images/logo.svg'

const Banner = () => (
    <Container
        pt={100}
        pb={100}
        bg='black'
        sx={{
            textAlign: 'center'
        }}
    >
        <Image src={logo}
            sx={{
                maxWidth: '20%',
                minWidth: '200px'
            }}
        />
        <Text
            sx={{
                color: 'white',
                fontSize: ['200%', '300%'],
                fontWeight: 'heading'
            }}
        >
            OpenArchitex
        </Text>
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