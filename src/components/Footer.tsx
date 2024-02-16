import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="">
          <li>
            <Link className="navbar-iteem" to={PathConstants.Policy}>
              Policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
