import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Footer from "../components/footer";

const MinimalPortfolio = () => (
    <Layout>
        <Banner/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </Layout>
)

export default MinimalPortfolio;