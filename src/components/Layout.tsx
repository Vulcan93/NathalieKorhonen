import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense, createContext, useContext, useRef } from "react";
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

  const scrollToRef = (refName: string) => {
    switch (refName) {
      case "Hem":
        if (hemRef.current) {
          hemRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "Psykoterapi":
        if (psykoterapiRef.current) {
          psykoterapiRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "OmMig":
        if (omMigRef.current) {
          omMigRef.current.scrollIntoView({ behavior: "smooth" });
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

  return (
    <RefContext.Provider
      value={{ hemRef, psykoterapiRef, omMigRef, kontaktRef }}
    >
      <div ref={hemRef}>
        <Header scrollToRef={scrollToRef} />
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
