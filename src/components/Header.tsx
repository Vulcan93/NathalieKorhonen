import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";

export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <Link to={PathConstants.Hem}>Startsida</Link>
          <Link to={PathConstants.Psykoterapi}>Om Psykoterapi</Link>
          <Link to={PathConstants.Kontakt}>Kontakt</Link>
        </h1>
      </div>
    </header>
  );
}
