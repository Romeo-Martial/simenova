import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../common/languageSwitcher/LanguageSwitcher";
import Button from "../../common/button/Button";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/case-studies", label: t("nav.caseStudies") },
    { to: "/team", label: t("nav.team") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 960) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={closeMenu}>
          SIMENOVA
        </NavLink>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <LanguageSwitcher />
          <Button to="/contact" variant="primary">
            {t("nav.cta")}
          </Button>
        </div>

        <button
          type="button"
          className="navbar__menu-button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={
          isMenuOpen ? "navbar__mobile navbar__mobile--open" : "navbar__mobile"
        }
      >
        <div className="container navbar__mobile-inner">
          <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__mobile-link navbar__mobile-link--active"
                    : "navbar__mobile-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__mobile-footer">
            <LanguageSwitcher />
            <Button to="/contact" variant="primary" onClick={closeMenu}>
              {t("nav.cta")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
