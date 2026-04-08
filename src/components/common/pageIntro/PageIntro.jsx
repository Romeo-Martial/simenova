import Container from "../container/Container";
import "./pageIntro.css";

export default function PageIntro({ title, description, align = "left" }) {
  return (
    <section className="section">
      <Container>
        <div className={`page-intro page-intro--${align}`}>
          <h2 className="page-intro__title">{title}</h2>
          <p className="page-intro__description">{description}</p>
        </div>
      </Container>
    </section>
  );
}
