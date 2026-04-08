import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import ContentSection from "../../components/common/contentSection/ContentSection";
import InfoCardGrid from "../../components/common/infoCardGrid/InfoCardGrid";
import ContactForm from "../../components/sections/contactForm/ContactForm";
import CTASection from "../../components/sections/ctaSection/CtaSection";
import { contactDetails } from "../../data/contactPage";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_LOCATION,
} from "../../utils/constants";

export default function ContactPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.contact")} | SIMENOVA`);

  const details = contactDetails.map((item) => {
    let description;
    switch (item.id) {
      case "email":
        description = CONTACT_EMAIL;
        break;
      case "phone":
        description = CONTACT_PHONE;
        break;
      case "location":
        description = CONTACT_LOCATION;
        break;
      default:
        description = t(item.descriptionKey);
    }

    return {
      id: item.id,
      title: t(item.titleKey),
      description: description,
    };
  });

  return (
    <>
      <PageHero
        eyebrow={t("contactPage.hero.eyebrow")}
        title={t("contactPage.hero.title")}
        description={t("contactPage.hero.description")}
      />

      <PageIntro
        title={t("contactPage.intro.title")}
        description={t("contactPage.intro.description")}
      />

      <ContentSection
        eyebrow={t("contactPage.form.eyebrow")}
        title={t("contactPage.form.title")}
        description={t("contactPage.form.description")}
      >
        <ContactForm />
      </ContentSection>

      <ContentSection
        eyebrow={t("contactPage.details.eyebrow")}
        title={t("contactPage.details.title")}
        description={t("contactPage.details.description")}
        background="light"
        stacked={true}
      >
        <InfoCardGrid items={details} columns={3} />
      </ContentSection>

      <CTASection />
    </>
  );
}
