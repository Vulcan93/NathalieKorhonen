import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { HeaderProps } from "../interfaces/Interface";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Header({ scrollToRef }: HeaderProps) {
  const [activeTab, setActiveTab] = useState("Hem");
  const [activeSection, setActiveSection] = useState("");

  // tod: snygg till detta senare (använd en samma metod 3ggr)

  const handleHemTab = () => {
    scrollToRef("Hem");
    setActiveTab("Hem");
  };

  const handlePsykoterapiTab = () => {
    scrollToRef("Psykoterapi");
    setActiveTab("Psykoterapi");
    // useScrollspy([""], 50);
  };

  const handleOmMigTab = () => {
    scrollToRef("OmMig");
    setActiveTab("OmMig");
  };

  const handleKontaktTab = () => {
    scrollToRef("Kontakt");
    setActiveTab("Kontakt");
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
              onClick={() => handleHemTab()}>
              Startsida
            </Link>
          </li>
          <li>
            <Link
              className={
                activeTab === "OmMig" ? "navbar-item active" : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handleOmMigTab()}>
              Om Mig
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
              onClick={() => handlePsykoterapiTab()}>
              Om Psykoterapi
            </Link>
          </li>

          <li>
            <Link
              className={
                activeTab === "Kontakt" ? "navbar-item active" : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handleKontaktTab()}>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      console.log(scroll);
      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;
