import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="footer-container">
          <span>&copy; 2024 Nathalie Psykologi AB. All rights reserved.</span>
          <li>
            <Link className="footer-item" to={PathConstants.Policy}>
              Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
