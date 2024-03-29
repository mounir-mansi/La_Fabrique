import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticleScreen from "./pages/Article/ArticleScreen";
import Contact from "./pages/Contact/ContactScreen";
import Formation from "./pages/Formation/Formation";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import InterventionEtAnimation from "./pages/InterventionEtAnimation/InterventionEtAnimation";
import AccompagnementAuPortageDeProjet from "./pages/AccompagnementAuPortageDeProjet/AccompagnementAuPortageDeProjet";
import App from "./App";

import { ArticleProvider } from "./context/ArticleContext";
import { ContactProvider } from "./context/ContactContext";

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
  {
    path: "/article/:id",
    element: <ArticleScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleProvider>
      <ContactProvider>
        <RouterProvider router={route} />
      </ContactProvider>
    </ArticleProvider>
  </React.StrictMode>
);
