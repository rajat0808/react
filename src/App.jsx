import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.jsx"));
const CataloguePage = lazy(() => import("./pages/CataloguePage.jsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

export default function App() {
  return (
    <HashRouter>
      <div className="page-shell">
        <Header />
        <main className="page-main">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/catalogue" element={<CataloguePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </HashRouter>
  );
}
