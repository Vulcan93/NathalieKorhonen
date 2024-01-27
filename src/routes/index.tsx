import React from "react";
import PathConstants from "./PathConstants";

const Hem = React.lazy(() => import("../pages/Hem"));
const Psykoterapi = React.lazy(() => import("../pages/Psykoterapi"));
const Kontakt = React.lazy(() => import("../pages/Kontakt"));

const routes = [
  { path: PathConstants.Hem, element: <Hem /> },
  { path: PathConstants.Psykoterapi, element: <Psykoterapi /> },
  { path: PathConstants.Kontakt, element: <Kontakt /> },
];

export default routes;
