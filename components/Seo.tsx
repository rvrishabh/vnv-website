import { Helmet } from "react-helmet-async";
import {
  ORGANIZATION_JSON_LD,
  SITE_NAME,
  absoluteUrl,
  type PageSeo,
} from "../lib/seo";

type SeoProps = PageSeo & {
  includeOrganization?: boolean;
  noindex?: boolean;
};

export function Seo({
  title,
  description,
  path,
  includeOrganization = false,
  noindex = false,
}: SeoProps) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/logos/vnv/logo-full.png");

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {includeOrganization && (
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
      )}
    </Helmet>
  );
}
