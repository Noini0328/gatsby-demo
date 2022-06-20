import React from 'react'
import { Link } from 'gatsby'
import { Container, Navbar, Nav } from 'react-bootstrap'


const Header = () => {
    return (  
      <header className="bg-dark">
        <Container>
          <Navbar expand="md" variant="dark">
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav as="ul" className="ml-auto">
                <Nav.Item as="li">
                  <Link to="/page-2" className="nav-link" activeClassName="active">Page2</Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Link to="/page-3" className="nav-link" activeClassName="active">Page3</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container> 
      </header>
    )
}

export default Header