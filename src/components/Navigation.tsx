import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  isServicePage?: boolean;
}

export default function Navigation({ isServicePage = false }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Desktop link style
  const baseDesktopStyle: React.CSSProperties = {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "1.05rem",
    letterSpacing: "0.04em",
    transition: "color 0.3s ease, text-shadow 0.3s ease",
  };

  const handleHoverIn = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>
  ) => {
    e.currentTarget.style.color = "#00FFFF";
    e.currentTarget.style.textShadow = "0 0 8px rgba(0,255,255,0.6)";
  };

  const handleHoverOut = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement>
  ) => {
    e.currentTarget.style.color = "#FFFFFF";
    e.currentTarget.style.textShadow = "none";
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg border-b"
      style={{
        backgroundColor: "#0B0F1A", // 🔒 SOLID HEADER
        borderBottomColor: "rgba(0, 255, 255, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-3xl transition duration-300"
            onClick={closeMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-8 w-8 mr-2"
              fill="none"
            >
              <path
                d="M50 0 L 10 100 H 30 L 50 55 L 70 100 H 90 L 50 0 Z"
                fill="#00FFFF"
              />
            </svg>
            <span className="gradient-text">AEZZI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            {(isServicePage ? [
              { label: "Home", to: "/" },
              { label: "Services", to: "/#services" },
              { label: "Process", to: "/#process" },
              { label: "Blogs", to: "/#blogs" },
            ] : [
              { label: "Home", to: "#home" },
              { label: "Services", to: "#services" },
              { label: "Process", to: "#process" },
              { label: "Blogs", to: "#blogs" },
            ]).map((item, i) =>
              item.to.startsWith("/") ? (
                <Link
                  key={i}
                  to={item.to}
                  style={{ ...baseDesktopStyle, marginRight: "40px" }}
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={i}
                  href={item.to}
                  style={{ ...baseDesktopStyle, marginRight: "40px" }}
                  onMouseEnter={handleHoverIn}
                  onMouseLeave={handleHoverOut}
                >
                  {item.label}
                </a>
              )
            )}

            {/* CTA */}
            {isServicePage ? (
              <Link
                to="/#contact"
                className="px-6 py-2 rounded-full font-bold transition-all"
                style={{
                  backgroundColor: "#00FFFF",
                  color: "#03040C",
                  boxShadow: "0 0 15px rgba(0,255,255,0.5)",
                }}
              >
                Contact Us
              </Link>
            ) : (
              <a
                href="#contact"
                className="px-6 py-2 rounded-full font-bold transition-all"
                style={{
                  backgroundColor: "#00FFFF",
                  color: "#03040C",
                  boxShadow: "0 0 15px rgba(0,255,255,0.5)",
                }}
              >
                Contact Us
              </a>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden"
            style={{ color: "#00FFFF" }}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40"
          style={{
            background:
              "radial-gradient(circle at top, rgba(0,255,255,0.25), transparent 60%), #03040C",
            backdropFilter: "blur(14px)",
          }}
        >
          <div className="flex flex-col h-full items-center pt-8 space-y-6">
            {(isServicePage ? [
              { label: "Home", to: "/" },
              { label: "Services", to: "/#services" },
              { label: "Process", to: "/#process" },
              { label: "Blogs", to: "/#blogs" },
            ] : [
              { label: "Home", to: "#home" },
              { label: "Services", to: "#services" },
              { label: "Process", to: "#process" },
              { label: "Blogs", to: "#blogs" },
            ]).map((item, i) =>
              item.to.startsWith("/") ? (
                <Link
                  key={i}
                  to={item.to}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={i}
                  href={item.to}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-white"
                >
                  {item.label}
                </a>
              )
            )}

            <div className="flex-1" />

            <a
              href="#contact"
              onClick={closeMenu}
              className="mb-10 px-10 py-3 rounded-full font-bold"
              style={{
                backgroundColor: "#00FFFF",
                color: "#03040C",
                boxShadow: "0 0 18px rgba(0,255,255,0.6)",
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
