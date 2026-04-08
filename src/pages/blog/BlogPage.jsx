import { useTranslation } from "react-i18next";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import PageHero from "../../components/layout/pageHero/PageHero";
import PageIntro from "../../components/common/pageIntro/PageIntro";
import Container from "../../components/common/container/Container";
import BlogCard from "../../components/common/blogCard/BlogCard";
import { blogPosts } from "../../data/blogPosts";
import "../../components/sections/blogPreview/blogPreview.css";
import CTASection from "../../components/sections/ctaSection/CtaSection";

export default function BlogPage() {
  const { t } = useTranslation();

  useDocumentTitle(`${t("meta.blog")} | SIMENOVA`);

  return (
    <>
      <PageHero
        eyebrow={t("blogPage.hero.eyebrow")}
        title={t("blogPage.hero.title")}
        description={t("blogPage.hero.description")}
      />

      <PageIntro
        title={t("blogPage.intro.title")}
        description={t("blogPage.intro.description")}
      />

      <section className="section bg-light">
        <Container>
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
        </Container>
      </section>

      <CTASection />
    </>
  );
}
