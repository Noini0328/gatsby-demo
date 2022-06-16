import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <Helmet>
        <meta name="description" content="このページはblogページです。" />
        <meta name="robots" content="all" />
      </Helmet>
      <p>My cool posts will go in here</p>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage