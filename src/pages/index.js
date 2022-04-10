import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Services from "../components/Services/Services"
import ServiceDetails from "../components/ServiceDetails/ServiceDetails"
import Features from "../components/Features/Features"
import ClientGallery from "../components/ClientGallery/ClientGallery"


const IndexPage = () => (
  <Layout >
    <SEO title="Home" />
   <Header  />
      <Services/>
      <ServiceDetails/>
      <Features />
      <ClientGallery />
  </Layout>
)

export default IndexPage
