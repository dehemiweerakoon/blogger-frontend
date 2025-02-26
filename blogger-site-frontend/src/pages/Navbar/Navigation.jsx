/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Container, Image, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import blogger from '../../assets/blogger.png';
const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logout =()=>{
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("user_id")
        window.location.href = "/login";
  }
  return (
    <>
      <Navbar expand="lg" className="nav-dis shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <Container>  
        <Image src={blogger} rounded className='m-1'/>
        <Navbar.Brand href="/home">My Blogger</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
        <Navbar.Offcanvas id="basic-navbar-nav" show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>My  Blogger </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="w-100 d-flex justify-content-end" >
              <Nav.Link href="/blog-list">Blog List</Nav.Link>
              <Nav.Link href="/blog/edit">Update Blog</Nav.Link> 
                <NavDropdown title="Logout" id="basic-nav-dropdown"onClick={logout}>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation