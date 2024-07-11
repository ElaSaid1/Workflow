import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Navi() {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#settings">Settings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}