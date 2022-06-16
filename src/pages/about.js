import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Helmet>
        <meta name="description" content="このページはAboutページです。" />
        <meta name="robots" content="all" />
      </Helmet>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default AboutPage



