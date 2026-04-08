import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Button from "../../components/common/button/Button";

export default function NotFoundPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.notFound")} | SIMENOVA`);

  return (
    <section className="section">
      <div className="container text-center">
        <h1>{t("pages.notFound")}</h1>
        <p style={{ margin: "1rem 0 2rem" }}>
          {t("pages.notFoundDescription")}
        </p>
        <Button to="/" variant="primary">
          {t("nav.home")}
        </Button>
      </div>
    </section>
  );
}
