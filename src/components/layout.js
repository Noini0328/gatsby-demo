import * as React from 'react'
import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

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
    <div className={container}>

      <Helmet>
        <html lang="ja" />
        <title>{pageTitle} | {SiteMetadataTitle}</title>
      </Helmet>
      <header className={siteTitle}>{SiteMetadataTitle}</header>
      <title>{WebTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout