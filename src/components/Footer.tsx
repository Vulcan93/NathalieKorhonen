import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="navbar-container">
          <p>&copy; 2024 Nathalie Psykologi AB. All rights reserved.</p>
          <li>
            <Link className="navbar-item" to={PathConstants.Policy}>
              Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
