import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  CONTACT_PHONE,
  CONTACT_LOCATION,
  CONTACT_EMAIL,
} from "../../../utils/constants";
import "./footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <h3 className="footer__brand">SIMENOVA</h3>
          <p className="footer__text">{t("footer.description")}</p>
        </div>

        <div>
          <h4 className="footer__title">{t("footer.navigation")}</h4>
          <ul className="footer__list">
            <li>
              <Link to="/">{t("nav.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("nav.about")}</Link>
            </li>
            <li>
              <Link to="/services">{t("nav.services")}</Link>
            </li>
            <li>
              <Link to="/case-studies">{t("nav.caseStudies")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("nav.contact")}</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="footer__title">{t("footer.contact")}</h4>
          <ul className="footer__list">
            <li>{CONTACT_EMAIL}</li>
            <li>{CONTACT_PHONE}</li>
            <li>{CONTACT_LOCATION}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
