import { Link } from "react-router-dom";
import PathConstants from "../routes/PathConstants";
import "./Header.css";
import { HeaderProps } from "../interfaces/Interface";
import { useEffect, useRef } from "react";
// import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";
// import { useScrollRefs } from "./Layout";

export default function Header({
  scrollToRef,
  activeTab,
  setActiveTab,
}: HeaderProps) {
  // const [activeSection, setActiveSection] = useState("");
  // const [isVisible, setIsVisible] = useState(false);
  // const observerRef = useRef<IntersectionObserver | null>(null);
  // const callbackFunction = (entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries;
  //   console.log(entry.isIntersecting);
  //   setIsVisible(entry.isIntersecting);
  // };

  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1,
  // };

  const checkboxRef = useRef<HTMLInputElement>(null);
  console.log(checkboxRef);
  const handleDocumentClick = (event: MouseEvent) => {
    if (
      checkboxRef.current &&
      !checkboxRef.current.contains(event.target as Node) &&
      checkboxRef.current.checked
    ) {
      checkboxRef.current.checked = false;
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleHemTab = () => {
    scrollToRef("Hem");
    setActiveTab("Hem");
  };

  const handlePsykoterapiTab = () => {
    scrollToRef("Psykoterapi");
    setActiveTab("Psykoterapi");
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
      <nav className="navbar-container">
        <input type="checkbox" ref={checkboxRef} />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="navbar-menu md:text-[18px] lg:text-[22px] xl:text-[26px] xxl:text-[28px]">
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
                activeTab === "Psykoterapi"
                  ? "navbar-item active"
                  : "navbar-item"
              }
              to={PathConstants.Hem}
              onClick={() => handlePsykoterapiTab()}
            >
              Psykoterapi
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
