import React from "react"
import {NavLink} from 'theme-ui'

const CustomNavLink = ({link, body, newTab = false}) => (
    <NavLink
        href={link}
        p={2}
        target={newTab ? "_blank": ""}
        rel="noopener noreferrer"
    >
        {body}
    </NavLink>
)

export default CustomNavLink;

