import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import Container from "../../components/common/container/Container";
import TeamCard from "../../components/common/teamCard/TeamCard";
import { teamMembers } from "../../data/team";
import "../../components/sections/teamPreview/teamPreview.css";
import CTASection from "../../components/sections/ctaSection/CtaSection";

export default function TeamPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.team")} | SIMENOVA`);

  return (
    <>
      <PageHero
        eyebrow={t("teamPage.hero.eyebrow")}
        title={t("teamPage.hero.title")}
        description={t("teamPage.hero.description")}
      />

      <PageIntro
        title={t("teamPage.intro.title")}
        description={t("teamPage.intro.description")}
      />

      <section className="section">
        <Container>
          <div className="team-preview__grid">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                nameKey={member.nameKey}
                roleKey={member.roleKey}
                bioKey={member.bioKey}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
