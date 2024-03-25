import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Formation from "./pages/Formation/Formation";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import InterventionEtAnimation from "./pages/InterventionEtAnimation/InterventionEtAnimation";
import AccompagnementAuPortageDeProjet from "./pages/AccompagnementAuPortageDeProjet/AccompagnementAuPortageDeProjet";
import App from "./App";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/qui-sommes-nous",
    element: <QuiSommesNous />,
  },
  {
    path: "/intervention-et-animation",
    element: <InterventionEtAnimation />,
  },
  {
    path: "/accompagnement-au-portage-de-projet",
    element: <AccompagnementAuPortageDeProjet />,
  },
  {
    path: "/formation",
    element: <Formation />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
