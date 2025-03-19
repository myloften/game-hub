interface MetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  url?: string;
}

export default function Metadata({
  title,
  description,
  keywords = [],
  image = '/images/og-image.jpg',
  type = 'website',
  url = typeof window !== 'undefined' ? window.location.href : '',
}: MetadataProps) {
  const siteName = 'GameHub - HTML5 Game Platform';
  const fullTitle = `${title} | ${siteName}`;

  return (
    <>
      {/* 基础 Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={[...keywords, 'HTML5 Games', 'Online Games', 'Mini Games'].join(', ')} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* 其他 Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href={url} />
    </>
  );
} 