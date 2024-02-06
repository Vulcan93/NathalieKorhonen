import { Link, NavLink } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="navbar-container">
          <li>
            <NavLink className="navbar-item" to={PathConstants.Hem}>
              Startsida
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" to={PathConstants.Psykoterapi}>
              Om Psykoterapi
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" to={PathConstants.Kontakt}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* 
      <Navbar expand="sm" className="navbar-container">
        <Navbar.Brand className="navbar-brand">Nat-Psykoterapi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navbar-item" to={PathConstants.Hem}>
              Startsida
            </Link>
            <Link className="navbar-item" to={PathConstants.Psykoterapi}>
              Om Psykoterapi
            </Link>
            <Link className="navbar-item" to={PathConstants.Kontakt}>
              Kontakt
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </header>
  );
}
