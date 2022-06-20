import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image'

//import Container from 'react-bootstrap/Container'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page5-2">
      <Helmet>
        <meta name="description" content="このページはIndexページです。" />
        <meta name="robots" content="all" />
      </Helmet>
      <p>I'm making this by following the Gatsby Tutorial.aaaaaaaaaaaaaaaaaaaaaaaaaa</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair test"
        src="../images/clifford2.jpg"
      />

      <div class="d-none d-lg-block">
        コンテンツA
      </div>
      <div class="d-block d-lg-none">
        コンテンツB
      </div>
      
    </Layout>
  )
}

export default IndexPage