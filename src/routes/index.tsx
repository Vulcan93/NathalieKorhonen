import { lazy } from "react";
import Policy from "../pages/Policy";

const Hem = lazy(() => import("../pages/Hem"));
const Psykoterapi = lazy(() => import("../pages/Psykoterapi"));
const Kontakt = lazy(() => import("../pages/Kontakt"));

const routes = [
  {
    path: "/",
    element: (
      <>
        <Hem />
        <Psykoterapi />
        <Kontakt />
      </>
    ),
  },
  {
    path: "/policy",
    element: <Policy />,
  },
];

export default routes;
