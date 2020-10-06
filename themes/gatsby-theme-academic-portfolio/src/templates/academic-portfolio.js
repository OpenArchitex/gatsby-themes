import React from "react"
import Layout from "../components/layout"
import Banner from "../components/banner"
import About from "../components/about"
import Footer from "../components/footer";
import { Divider } from "theme-ui";
import SEO from "../components/seo";
import Teaching from "../components/teaching";
import Research from "../components/research";

const AcademicPortfolio = () => (
    <>
        <Banner />
        <Layout>
            <SEO title="Home" />
            <About/>
            <Divider />
            <Teaching />
            <Divider />
            <Research />
            <Divider />
            <Footer/>
        </Layout>
    </>
)

export default AcademicPortfolio;