import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return <div>
    <div className="navigation container-fluid">
    <Navbar dark expand="md" className="nav-content">
      <NavbarBrand className="link" href="#intro">My Portfolio</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="nav-item">
            <NavLink className="link white-link" href="#about">About</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="link white-link" href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="link white-link" href="#works">Works</NavLink>
          </NavItem>
          <NavItem className="nav-item">
            <NavLink className="link white-link" href="#contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  </div>;
}

export default NavBar;