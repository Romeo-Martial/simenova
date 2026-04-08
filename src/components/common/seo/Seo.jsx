import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  path = "",
  image = "/images/og-default.jpg",
}) {
  const siteName = "SIMENOVA";
  const siteUrl = "https://www.simenova.com";
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
