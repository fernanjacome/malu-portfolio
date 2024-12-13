import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.7, maximum-scale=1, user-scalable=yes"
        />

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maria Luisa Carrion",
              jobTitle: "Marketing and Communications",
              url: "https://www.marialuisacarrion.com",
              sameAs: [
                "https://www.facebook.com/marialuisacarrion",
                "https://twitter.com/marialuisa",
              ],
            }),
          }}
        />
        <title>Maria Luisa Carrion - Marketing and Communications</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
