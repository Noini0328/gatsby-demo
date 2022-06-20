import * as React from 'react'
import { Helmet } from 'react-helmet';
//import { Link, useStaticQuery, graphql } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
//  navLinks,
//  navLinkItem,
//  navLinkText,
  siteTitle
} from './layout.module.css'

 /* yarnでinstallしたものをインポート */
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header.js"
import Footer from "../components/footer.js"


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
      <Header/>
      <title>{WebTitle}</title>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout