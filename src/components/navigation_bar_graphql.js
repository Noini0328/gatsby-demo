import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container, Navbar, Nav } from 'react-bootstrap'


const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allSitePage(
        sort: {fields: id}
        filter: {pluginCreator: {name: {eq: "gatsby-plugin-page-creator"}}, componentChunkName: {ne: "component---src-pages-404-js"}}
      ) {
        edges {
          node {
            path
            pluginCreator {
              name
              id
            }
            id
            componentChunkName
            internalComponentName
          }
        }
      }
    }
  `);

  
  const categoryList = data.allSitePage.edges.map(cat => (
    <Nav.Item as="li">
    <Link to={cat.node.path} className="nav-link" activeClassName="active">{cat.node.path}</Link>
    </Nav.Item>
  ));

  return (
    <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            {categoryList}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container> 
  </header>

  );
};

export default Navigation;