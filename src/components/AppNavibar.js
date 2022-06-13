import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const AppNavibar = () => {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand>Note-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/notes'>
                <Nav.Link >Notes</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/create'>
                <Nav.Link >Create</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavibar