import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Helmet>
        <meta name="description" content="このページはblogページです。" />
        <meta name="robots" content="all" />
      </Helmet>
      <p>My cool posts will go in here</p>
    </Layout>
  )
}

export default BlogPage