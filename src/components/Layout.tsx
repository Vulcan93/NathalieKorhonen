import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { RefContextType } from "../interfaces/Interface";

const RefContext = createContext<RefContextType>({
  hemRef: { current: null },
  psykoterapiRef: { current: null },
  omMigRef: { current: null },
  kontaktRef: { current: null },
});

export default function Layout() {
  const hemRef = useRef<HTMLDivElement | null>(null);
  const psykoterapiRef = useRef<HTMLDivElement | null>(null);
  const omMigRef = useRef<HTMLDivElement | null>(null);
  const kontaktRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState("Hem");
  
  const scrollToRef = (refName: string) => {
    switch (refName) {
      case "Hem":
        if (hemRef.current) {
          hemRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "OmMig":
        if (omMigRef.current) {
                    window.scrollTo({
            top: omMigRef.current.offsetTop - 20,
            behavior: "smooth",
          });
        }
        break;
      case "Psykoterapi":
        if (psykoterapiRef.current) {
                    window.scrollTo({
            top: psykoterapiRef.current.offsetTop - 50,
            behavior: "smooth",
          });
        }
        break;
      case "Kontakt":
        if (kontaktRef.current) {
          kontaktRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };
  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     setIsOnScreen(entry.isIntersecting);
  //     if (entry.isIntersecting) {
  //       console.log("first");
  //       setActiveTab("navbar-item active");
  //     } else {
  //       console.log("meepo");
  //       setActiveTab("navbar-item");
  //     }
  //   });

  //   if (hemRef.current) observer.observe(hemRef.current);
  //   if (omMigRef.current) observer.observe(omMigRef.current);
  //   if (psykoterapiRef.current) observer.observe(psykoterapiRef.current);
  //   if (kontaktRef.current) observer.observe(kontaktRef.current);
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [setActiveTab]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // setActiveSection(entry.target.id);
  //           setActiveTab(entry.target.id);
  //           console.log("Intersecting: ", entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0 }
  //   );

  //   if (hemRef.current) observer.observe(hemRef.current);
  //   if (omMigRef.current) observer.observe(omMigRef.current);
  //   if (psykoterapiRef.current) observer.observe(psykoterapiRef.current);
  //   if (kontaktRef.current) observer.observe(kontaktRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [setActiveTab]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Intersection observer entry:", entry);
          switch (entry.target.id) {
            case "hemSectionId":
              setActiveTab("Hem");
              break;
            case "omMigSectionId":
              setActiveTab("OmMig");
              break;
            case "psykoterapiSectionId":
              setActiveTab("Psykoterapi");
              break;
            case "kontaktSectionId":
              setActiveTab("Kontakt");
              break;
            default:
              setActiveTab("");
              break;
          }
        }
      });
    });

    // Observe the sections
    if (hemRef.current) observer.observe(hemRef.current);
    if (omMigRef.current) observer.observe(omMigRef.current);
    if (psykoterapiRef.current) observer.observe(psykoterapiRef.current);
    if (kontaktRef.current) observer.observe(kontaktRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <RefContext.Provider
      value={{ hemRef, omMigRef, psykoterapiRef, kontaktRef }}>
      <div id="hemSectionId" ref={hemRef}>
        <Header
          scrollToRef={scrollToRef}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </RefContext.Provider>
  );
}

export function useScrollRefs() {
  return useContext(RefContext);
}
