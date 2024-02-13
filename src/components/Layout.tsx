import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { RefObject, Suspense, useRef } from "react";
import Kontakt from "../pages/Kontakt";
import Hem from "../pages/Hem";
import Psykoterapi from "../pages/Psykoterapi";

export default function Layout() {
  const hemRef = useRef<HTMLDivElement | null>(null);
  const psykoterapiRef = useRef<HTMLDivElement | null>(null);
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
    <div>
      <Header scrollToRef={scrollToRef} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hem forwardedRef={hemRef} />
          <Psykoterapi forwardedRef={psykoterapiRef} />
          <Kontakt forwardedRef={kontaktRef} />
          {/* <Outlet context={[name]} /> */}
          <Outlet />
          {/* <div ref={wrapperRef}></div> */}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
