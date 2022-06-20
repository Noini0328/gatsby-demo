import * as React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby'
import {heading, siteTitle} from './layout.module.css'

import Navigation  from './navigation_bar_graphql';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const WebTitle = data.site.siteMetadata.title
  const SiteMetadataTitle = data.site.siteMetadata.title

  return (
    <Container>
      <Helmet>
        <html lang="ja" />
        <title>{pageTitle} | {SiteMetadataTitle}</title>
      </Helmet>
      <Navigation />
      <header className={siteTitle}>{SiteMetadataTitle}</header>
      <title>{WebTitle}</title>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

    </Container>
  )
}

export default Layout