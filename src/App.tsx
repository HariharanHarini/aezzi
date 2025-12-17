import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WebDevelopmentService from "./pages/WebDevelopmentService";
import MetaGoogleAdsService from "./pages/MetaGoogleAdsService";
import SocialMediaService from "./pages/SocialMediaService";
import BrandManagementService from "./pages/BrandManagementService";
import SEOService from "./pages/SEOService";

// 👉 Import the floating WhatsApp button
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  return (
    <Router>
      {/* App Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/services/web-development"
          element={<WebDevelopmentService />}
        />
        <Route
          path="/services/meta-google-ads"
          element={<MetaGoogleAdsService />}
        />
        <Route
          path="/services/social-media"
          element={<SocialMediaService />}
        />
        <Route
          path="/services/brand-management"
          element={<BrandManagementService />}
        />
        <Route path="/services/seo" element={<SEOService />} />
      </Routes>

      {/* ✅ Floating WhatsApp Icon (visible on all pages) */}
      <WhatsAppFloating />
    </Router>
  );
}
