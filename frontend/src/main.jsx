import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ArticleScreen from "./pages/Article/ArticleScreen";
import Contact from "./pages/Contact/ContactScreen";
import Formation from "./pages/NosFormation/NosFormation";
import QuiSommesNous from "./pages/QuiSommesNous/QuiSommesNous";
import InterventionEtAnimation from "./pages/InterventionEtAnimation/InterventionEtAnimation";
import AccompagnementAuPortageDeProjet from "./pages/AccompagnementAuPortageDeProjet/AccompagnementAuPortageDeProjet";
import { ArticleProvider } from "./context/ArticleContext";
import { ContactProvider } from "./context/ContactContext";
import { SectionProvider } from "./context/SectionContext";
import { TeamProvider } from "./context/QsnContext";
import { SectionArticleProvider } from "./context/SectionArticleContext";
import { ElementListProvider } from "./context/ElementListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleProvider>
      <SectionArticleProvider>
        <ElementListProvider>
          <ContactProvider>
            <SectionProvider>
              <TeamProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                      path="/qui-sommes-nous"
                      element={<QuiSommesNous />}
                    />
                    <Route
                      path="/intervention-et-animation"
                      element={<InterventionEtAnimation />}
                    />
                    <Route
                      path="/accompagnement-au-portage-de-projet"
                      element={<AccompagnementAuPortageDeProjet />}
                    />
                    <Route path="/formation" element={<Formation />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/article/:id" element={<ArticleScreen />} />
                  </Routes>
                </Router>
              </TeamProvider>
            </SectionProvider>
          </ContactProvider>
        </ElementListProvider>
      </SectionArticleProvider>
    </ArticleProvider>
  </React.StrictMode>
);
