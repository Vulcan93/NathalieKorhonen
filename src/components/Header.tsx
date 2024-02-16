import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { HeaderProps } from "../interfaces/Interface";
import { useState } from "react";

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
    </header>
  );
}
