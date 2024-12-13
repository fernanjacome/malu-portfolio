import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.70, maximum-scale=0.70, user-scalable=no"
        />
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
