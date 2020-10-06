import React from "react"
import CustomNavLink from "../components/custom-nav-link"

const components = {
    CustomNavLink: ({link, body, newTab}) => (
        <CustomNavLink link={link} body={body} newTab={newTab}/>
    ),
}

export default components