import { lazy } from "react";

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
];

export default routes;
