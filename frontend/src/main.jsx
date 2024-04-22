import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticleScreen from "./pages/Article/ArticleScreen";
import Contact from "./pages/Contact/ContactScreen";
import Formation from "./pages/NosFormation/NosFormation";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import InterventionEtAnimation from "./pages/InterventionEtAnimation/InterventionEtAnimation";
import AccompagnementAuPortageDeProjet from "./pages/AccompagnementAuPortageDeProjet/AccompagnementAuPortageDeProjet";
// import Footer from "./components/Footer/Footer/Footer";
// import Newsletter from "./components/Footer/Newsletter/Newsletter";
import App from "./App";

import { ArticleProvider } from "./context/ArticleContext";
import { ContactProvider } from "./context/ContactContext";
import { SectionProvider } from "./context/SectionContext";
import { TeamProvider } from "./context/QsnContext";

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
        <SectionProvider>
          {/* <Footer>
            <Newsletter> */}
          <TeamProvider>
            <RouterProvider router={route} />
          </TeamProvider>
          {/* </Newsletter>
          </Footer> */}
        </SectionProvider>
      </ContactProvider>
    </ArticleProvider>
  </React.StrictMode>
);
