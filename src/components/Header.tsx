import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { HeaderProps } from "../interfaces/Interface";

export default function Header({ scrollToRef }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul className="navbar-container">
          <li>
            <Link
              className="navbar-item"
              to={PathConstants.Hem}
              onClick={() => scrollToRef("Hem")}>
              Startsida
            </Link>
          </li>
          <li>
            <Link
              className="navbar-item"
              to={PathConstants.Hem}
              onClick={() => scrollToRef("Psykoterapi")}>
              Om Psykoterapi
            </Link>
          </li>
          <li>
            <Link
              className="navbar-item"
              to={PathConstants.Hem}
              onClick={() => scrollToRef("Kontakt")}>
              Kontakt
            </Link>
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
