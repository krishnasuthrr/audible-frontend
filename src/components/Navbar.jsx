import { useState, useEffect } from "react";
import { href, Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/", },
  { label: "About", to: "/#about-page", },
  { label: "Products", to: "/#products-page", },
  { label: "Contact", to: "/#contact-page", },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Go to homepage"
          >
            <a href="#home-page" className="text-2xl font-bold font-lexend text-gray-900 tracking-tight">
              Audible
            </a>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="relative px-4 py-2 text-[15px] font-medium text-gray-800 rounded-lg hover:text-black hover:bg-[#e5e5e5] transition-all duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#282828] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-[15px] font-medium font-inter text-black hover:text-[#515151] transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-semibold font-inter text-white bg-[#232323] rounded-lg hover:bg-black active:scale-95 transition-all duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-900 hover:bg-gray-100  transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-1.75" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-200 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2.25" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-montserrat font-medium text-gray-700 rounded-lg hover:text-black hover:bg-[#ececec] transition-all duration-150"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="pt-3 pb-1 border-t border-gray-100 flex flex-col gap-2 mt-2">
            <Link
              to="/login"
              className="w-full px-4 py-2.5 text-sm font-medium text-center text-black border border-black rounded-lg hover:bg-gray-50 transition-colors duration-150"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="w-full px-4 py-2.5 text-sm font-semibold text-center text-white bg-black rounded-lg hover:bg-[#1a1a1a] transition-colors duration-150 shadow-sm"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
