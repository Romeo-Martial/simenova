import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import TestimonialCard from "../../common/testimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonials";
import "./testimonials.css";

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="section bg-light">
      <Container>
        <SectionHeading
          eyebrow={t("home.testimonials.eyebrow")}
          title={t("home.testimonials.title")}
          description={t("home.testimonials.description")}
        />

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quoteKey={testimonial.quoteKey}
              nameKey={testimonial.nameKey}
              roleKey={testimonial.roleKey}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
