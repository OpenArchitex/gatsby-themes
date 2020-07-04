import React from "react"
import { Parallax } from "react-spring/renderprops-addons"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"

const MinimalPortfolio = () => (
    <Layout>
        <Parallax pages={4}>
            <Banner/>
            <About/>
            <Projects/>
            <Contact/>
        </Parallax>
    </Layout>
)

export default MinimalPortfolio;