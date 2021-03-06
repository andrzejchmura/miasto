import NextHead from 'next/head';

type HeadProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
};

const Head = ({
  title = 'Miasto',
  description = 'Open-source, interactive city explorer.',
  image = '/hero.png',
  children,
}: HeadProps) => {
  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://mias.to" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@andrzejchmura" />
      <meta name="apple-mobile-web-app-title" content="Miasto" />
      <meta name="author" content="Andrzej Chmura" />

      <script
        async
        defer
        data-domain="mias.to"
        src="https://plausible.io/js/plausible.js"
      ></script>

      <link
        rel="preload"
        href="/fonts/Barlow-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Barlow-SemiBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="prefetch" href="/gdynia/buildings.geojson" />
      {children}
    </NextHead>
  );
};

export default Head;
