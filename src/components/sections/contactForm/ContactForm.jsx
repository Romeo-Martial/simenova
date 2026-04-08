import { useState } from "react";
import { useTranslation } from "react-i18next";
import { submitContactForm } from "../../../services/contactService";
import Button from "../../common/button/Button";
import "./contactForm.css";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus("success");
        setFormData(initialFormState);
        return;
      }

      setStatus("error");
      setErrorMessage(t("contactForm.error"));
    } catch {
      setStatus("error");
      setErrorMessage(t("contactForm.error"));
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="name">{t("contactForm.fields.name")}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contactForm.placeholders.name")}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">{t("contactForm.fields.email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contactForm.placeholders.email")}
            required
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="company">{t("contactForm.fields.company")}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder={t("contactForm.placeholders.company")}
          />
        </div>

        <div className="contact-form__field">
          <label htmlFor="service">{t("contactForm.fields.service")}</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">{t("contactForm.placeholders.service")}</option>
            <option value="data-analysis">
              {t("contactForm.options.dataAnalysis")}
            </option>
            <option value="predictive-modeling">
              {t("contactForm.options.predictiveModeling")}
            </option>
            <option value="machine-learning">
              {t("contactForm.options.machineLearning")}
            </option>
            <option value="decision-support">
              {t("contactForm.options.decisionSupport")}
            </option>
            <option value="consulting">
              {t("contactForm.options.consulting")}
            </option>
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">{t("contactForm.fields.message")}</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contactForm.placeholders.message")}
          required
        />
      </div>

      <div className="contact-form__actions">
        <Button type="submit" variant="primary" disabled={status === "loading"}>
          {status === "loading"
            ? t("contactForm.sending")
            : t("contactForm.submit")}
        </Button>

        {submitted ? (
          <p className="contact-form__success" role="status">
            {t("contactForm.success")}
          </p>
        ) : null}
        {status === "success" ? (
          <p className="contact-form__success" role="status">
            {t("contactForm.success")}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="contact-form__error" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
