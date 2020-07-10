import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer";
import { Divider } from "theme-ui";
import SEO from "../components/seo";

const MinimalPortfolio = () => (
    <>
        <Banner/>
        <Layout>
            <SEO title="Home" />
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