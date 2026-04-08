import { useTranslation } from "react-i18next";
import "./caseStudyCard.css";

export default function CaseStudyCard({
  titleKey,
  challengeKey,
  solutionKey,
  outcomeKey,
}) {
  const { t } = useTranslation();

  return (
    <article className="case-study-card">
      <h3>{t(titleKey)}</h3>

      <div className="case-study-card__content">
        <p>
          <strong>{t("home.caseStudies.labels.challenge")}:</strong>{" "}
          {t(challengeKey)}
        </p>
        <p>
          <strong>{t("home.caseStudies.labels.solution")}:</strong>{" "}
          {t(solutionKey)}
        </p>
        <p>
          <strong>{t("home.caseStudies.labels.outcome")}:</strong>{" "}
          {t(outcomeKey)}
        </p>
      </div>
    </article>
  );
}
