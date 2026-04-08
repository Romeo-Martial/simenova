import Container from "../container/Container";
import "./contentSection.css";

export default function ContentSection({
  eyebrow,
  title,
  description,
  children,
  reverse = false,
  background = "default",
  stacked = false,
}) {
  return (
    <section className={`section ${background === "light" ? "bg-light" : ""}`}>
      <Container>
        <div
          className={`content-section ${reverse ? "content-section--reverse" : ""} ${stacked ? "content-section--stacked" : ""}`}
        >
          <div className="content-section__main">
            {eyebrow ? (
              <p className="content-section__eyebrow">{eyebrow}</p>
            ) : null}
            <h2 className="content-section__title">{title}</h2>
            {description ? (
              <p className="content-section__description">{description}</p>
            ) : null}
          </div>

          <div className="content-section__side">{children}</div>
        </div>
      </Container>
    </section>
  );
}
