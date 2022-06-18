import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (

    <Layout pageTitle="Home Page5-2">
      <Helmet>
        <meta name="description" content="このページはIndexページです。" />
        <meta name="robots" content="all" />
      </Helmet>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair test"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

export default IndexPage