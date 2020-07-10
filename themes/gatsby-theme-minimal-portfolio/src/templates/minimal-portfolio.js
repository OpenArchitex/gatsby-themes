import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer";
import { Divider } from "theme-ui";

const MinimalPortfolio = () => (
    <>
        <Banner/>
        <Layout>
            <About/>
            <Divider />
            <Projects/>
            <Divider />
            <Contact/>
            <Divider />
            <Footer/>
        </Layout>
    </>
)

export default MinimalPortfolio;