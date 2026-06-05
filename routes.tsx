import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Seo } from "./components/Seo";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { EmpanelledBanks } from "./screens/EmpanelledBanks";
import { Services } from "./screens/Services";
import { ValuPro } from "./screens/ValuPro";
import { Contact } from "./screens/Contact";
import { getPageSeo } from "./lib/seo";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SeoManager() {
  const { pathname } = useLocation();
  const seo = getPageSeo(pathname);

  return <Seo {...seo} includeOrganization={pathname === "/"} />;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/empanelled-banks" element={<EmpanelledBanks />} />
          <Route path="/valupro" element={<ValuPro />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
