import Container from "../../common/container/Container";
import "./pageHero.css";

export default function PageHero({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <section className={`page-hero ${centered ? "page-hero--centered" : ""}`}>
      <Container>
        <div className="page-hero__content">
          {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero__title">{title}</h1>
          {description ? (
            <p className="page-hero__description">{description}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
