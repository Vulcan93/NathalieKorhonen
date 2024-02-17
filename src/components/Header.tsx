import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { HeaderProps } from "../interfaces/Interface";
import { useState } from "react";

export default function Header({ scrollToRef }: HeaderProps) {
  const [activeTab, setActiveTab] = useState("Hem");

  // tod: snygg till detta senare (använd en samma metod 3ggr)

  const handleHemTab = () => {
    scrollToRef("Hem");
    setActiveTab("Hem");
  };
  const handlePsykoterapiTab = () => {
    scrollToRef("Psykoterapi");
    setActiveTab("Psykoterapi");
  };

  const handleKontaktTab = () => {
    scrollToRef("Kontakt");
    setActiveTab("Kontakt");
  };

  const handleOmMigTab = () => {
    scrollToRef("OmMig");
    setActiveTab("OmMig");
  };

  return (
    <header>
      <nav>
        <ul className="navbar-container">
          <li>
            <Link
              className={
                activeTab === "Hem" ? "navbar-item active" : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handleHemTab()}
            >
              Startsida
            </Link>
          </li>
          <li>
            <Link
              className={
                activeTab === "Psykoterapi"
                  ? "navbar-item active"
                  : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handlePsykoterapiTab()}
            >
              Om Psykoterapi
            </Link>
          </li>
          <li>
            <Link
              className={
                activeTab === "OmMig" ? "navbar-item active" : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handleOmMigTab()}
            >
              Om Mig
            </Link>
          </li>
          <li>
            <Link
              className={
                activeTab === "Kontakt" ? "navbar-item active" : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handleKontaktTab()}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
