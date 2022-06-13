import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const AppNavibar = () => {
  return (
    <div>
      <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand>Notes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Link</Nav.Link>
              <Nav.Link >Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavibar