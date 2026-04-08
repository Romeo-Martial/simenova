import { useTranslation } from "react-i18next";
import "./trustStrip.css";

export default function TrustStrip() {
  const { t } = useTranslation();
  const items = t("home.trustStrip.items", { returnObjects: true });

  return (
    <section className="trust-strip">
      <div className="container trust-strip__inner">
        {items.map((item) => (
          <span key={item} className="trust-strip__item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
