import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/js/lazysizes.min.js";
import "./assets/css/animation-2023.css";
import "./assets/css/common-head-foot-2023.css";
import "./assets/css/faq.css";
import "./assets/css/home.css";
import "./assets/css/hire-modal.css";
import "./assets/css/intlTelInput.css";
import "./assets/css/owl.carousel.min.css";

// Import Components
import Navbar from "./components/Navbar";
import MyHero from "./components/MyHero";
import PartnerSections from "./components/PartnerSections";
import VisionSection from "./components/VisionSection";
import BoostBusiness from "./components/BoostBusiness";
import ServiceSection from "./components/ServiceSection";
import FeatureSection from "./components/FeatureSection";
import GainUpperEdge from "./components/GainUpperEdge";
import ServingAll from "./components/ServingAll";
import Industries from "./components/Industries";
import OurApp1 from "./components/OurApp1";
import OurApp2 from "./components/OurApp2";
import OurApp3 from "./components/OurApp3";
import OurApp4 from "./components/OurApp4";
import DiscussYourProject from "./components/DiscussYourProject";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import Faq from "./components/Faq";
import Blogs from "./components/Blogs";
import GetFreeQuote from "./components/GetFreeQuote";
import Honour from "./components/Honour";
import OurOffices from "./components/OurOffices";
import NewsLetter from "./components/NewsLetter";
import ServingFooter from "./components/ServingFooter";
import FooterMenu from "./components/FooterMenu";
import FooterSocial from "./components/FooterSocial";
import FooterCopyright from "./components/FooterCopyright";

// Additional Pages
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Other from "./pages/Other";

function App() {
  return (
    <Router>
      <div className="site_content lazyload">
        <div className="page-warper">
          <Navbar />
          <main>
            <Routes>
              {/* Home Route */}
              <Route
                path="/"
                element={
                  <>
                    <MyHero />
                    <PartnerSections />
                    <VisionSection />
                    <BoostBusiness />
                    <ServiceSection />
                    <FeatureSection />
                    <GainUpperEdge />
                    <ServingAll />
                    <Industries />
                    <OurApp1 />
                    <OurApp2 />
                    <OurApp3 />
                    <OurApp4 />
                    <DiscussYourProject />
                    <Testimonials />
                    <CaseStudies />
                    <Faq />
                    <div>
                      <Blogs />
                      <GetFreeQuote />
                      <Honour />
                      <OurOffices />
                    </div>
                  </>
                }
              />

              {/* About Route */}
              <Route path="/about" element={<About />} />

              {/* Portfolio Route */}
              <Route path="/portfolio" element={<Portfolio />} />

              {/* Other Route */}
              {/* <Route path="/other" element={<Other />} /> */}
            </Routes>

            {/* Footer (Displayed for All Pages) */}
            <footer className="lazyload">
              <NewsLetter />
              <ServingFooter />
              <FooterMenu />
              <FooterSocial />
              <FooterCopyright />
            </footer>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
