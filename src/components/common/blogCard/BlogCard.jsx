import { useTranslation } from "react-i18next";
import "./BlogCard.css";

export default function BlogCard({ dateKey, titleKey, excerptKey }) {
  const { t } = useTranslation();

  return (
    <article className="blog-card">
      <span className="blog-card__date">{t(dateKey)}</span>
      <h3>{t(titleKey)}</h3>
      <p>{t(excerptKey)}</p>
    </article>
  );
}
