import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar bg="dark" variant="dark" expand="lg" className="top-navbar">
        <Container fluid className='topnav'>
          <h4 style={{color:"white", padding:"10px 40px", marginTop:"10px"}}>CURD</h4>
          <h1 href="#home" style={{color:"white", marginLeft:"600px",}}>Dashboard</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='content-container'>
        <div className="sidebar bg-dark text-white">
          <hr />
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link style={{marginLeft:"20px",fontSize:"27px"}} href="/home" className="text-white">Home</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontSize:"26px"}} href="/insert" className="text-white">Insert</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontSize:"26px"}} href="/display" className="text-white">Display</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontSize:"26px"}} href="/update" className="text-white">Update</Nav.Link>
            <Nav.Link style={{marginLeft:"20px",fontSize:"26px"}} href="/search" className="text-white">Search</Nav.Link>
            <Nav.Link eventKey="disabled" className="text-white" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </div>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
