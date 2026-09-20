import type { Metadata } from "next";

const SITE_NAME = "Иншооти Сол";
const SITE_URL = "https://inshootisol.tj";
const DEFAULT_DESCRIPTION =
  "Строительная компания «Иншооти Сол» — надёжные и современные жилые комплексы в Душанбе. Квартиры в новостройках, рассрочка от застройщика.";

interface SeoParams {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function buildMetadata({
  title,
  description,
  image,
  path,
}: SeoParams = {}): Metadata {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  const desc = description || DEFAULT_DESCRIPTION;
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogImage = image || `${SITE_URL}/logo.png`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};
