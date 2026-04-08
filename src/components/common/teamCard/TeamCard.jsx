import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./teamCard.css";

export default function TeamCard({ nameKey, roleKey, bioKey, image }) {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);
  const name = t(nameKey);

  return (
    <article className="team-card">
      {!imageError && image ? (
        <img
          src={image}
          alt={name}
          className="team-card__image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="team-card__avatar" aria-hidden="true">
          {name.charAt(0)}
        </div>
      )}

      <h3>{name}</h3>
      <p className="team-card__role">{t(roleKey)}</p>
      <p className="team-card__bio">{t(bioKey)}</p>
    </article>
  );
}
