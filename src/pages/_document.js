import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="preload" href="/bg.webp" as="image" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Meta tags for SEO */}
          <meta charSet="UTF-8" />

          <meta
            name="description"
            content="Maria Luisa Carrion - Marketing and Communications"
          />
          <meta name="author" content="Maria Luisa Carrion" />

          {/* Open Graph meta tags for social media sharing */}
          <meta property="og:title" content="Maria Luisa Carrion" />
          <meta
            property="og:description"
            content="Maria Luisa Carrion - Marketing and Communications"
          />
          <meta property="og:image" content="/path-to-image.jpg" />
          <meta property="og:url" content="https://www.marialuisacarrion.com" />
          <meta property="og:type" content="website" />

          {/* Twitter card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Maria Luisa Carrion" />
          <meta
            name="twitter:description"
            content="Maria Luisa Carrion - Marketing and Communications"
          />
          <meta name="twitter:image" content="/path-to-image.jpg" />

          {/* Title tag */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
