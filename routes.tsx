import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Seo } from "./components/Seo";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { EmpanelledBanks } from "./screens/EmpanelledBanks";
import { Services } from "./screens/Services";
import { ServiceDetail } from "./screens/ServiceDetail";
import { CityValuer } from "./screens/CityValuer";
import { Faq } from "./screens/Faq";
import { ValuPro } from "./screens/ValuPro";
import { Contact } from "./screens/Contact";
import { NotFound } from "./screens/NotFound";
import { CITY_PAGES } from "./data";
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
  return <Seo seo={getPageSeo(pathname)} />;
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
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/empanelled-banks" element={<EmpanelledBanks />} />
          <Route path="/valupro" element={<ValuPro />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          {CITY_PAGES.map((c) => (
            <Route key={c.slug} path={`/${c.slug}`} element={<CityValuer city={c} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
