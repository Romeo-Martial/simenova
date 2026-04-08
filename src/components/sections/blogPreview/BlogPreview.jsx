import { useTranslation } from "react-i18next";
import Container from "../../common/container/Container";
import SectionHeading from "../../common/sectionHeading/SectionHeading";
import Button from "../../common/button/Button";
import BlogCard from "../../common/blogCard/BlogCard";
import { blogPosts } from "../../../data/blogPosts";
import "./blogPreview.css";

export default function BlogPreview() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow={t("home.blog.eyebrow")}
          title={t("home.blog.title")}
          description={t("home.blog.description")}
        />

        <div className="blog-preview__grid">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              dateKey={post.dateKey}
              titleKey={post.titleKey}
              excerptKey={post.excerptKey}
            />
          ))}
        </div>

        <div className="blog-preview__action">
          <Button to="/blog" variant="secondary">
            {t("home.blog.cta")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
