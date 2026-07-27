// Props accepted by BaseHead. BaseLayout takes the same shape and forwards it
// through verbatim, so both import this rather than redeclaring it.
export interface HeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: Date;
  updatedTime?: Date;
  jsonLd?: Record<string, unknown>;
}
