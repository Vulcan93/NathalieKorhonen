import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <div>
        <ul className="navbar-container">
          <li>
            <Link className="navbar-item" to={PathConstants.Hem}>
              Startsida
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to={PathConstants.Psykoterapi}>
              Om Psykoterapi
            </Link>
          </li>

          <li>
            <Link className="navbar-item" to={PathConstants.Kontakt}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
