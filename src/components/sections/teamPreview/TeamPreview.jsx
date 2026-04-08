import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import Button from "../../common/button/Button";
import TeamCard from "../../common/teamCard/TeamCard";
import { teamMembers } from "../../../data/team";
import "./teamPreview.css";

export default function TeamPreview() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={t("home.team.eyebrow")}
          title={t("home.team.title")}
          description={t("home.team.description")}
        />

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

        <div className="team-preview__action">
          <Button to="/team" variant="secondary">
            {t("home.team.cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
