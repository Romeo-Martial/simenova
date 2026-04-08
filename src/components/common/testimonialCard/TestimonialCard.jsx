import { useTranslation } from "react-i18next";
import "./testimonialCard.css";

export default function TestimonialCard({ quoteKey, nameKey, roleKey }) {
  const { t } = useTranslation();

  return (
    <article className="testimonial-card">
      <p className="testimonial-card__quote">“{t(quoteKey)}”</p>

      <div className="testimonial-card__author">
        <strong>{t(nameKey)}</strong>
        <span>{t(roleKey)}</span>
      </div>
    </article>
  );
}
