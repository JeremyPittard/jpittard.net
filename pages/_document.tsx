/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Digital Consulting & Web Development in Perht</title>
        <meta
          name="description"
          content="Perth Web Development and Consulting"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-alto.ico"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className="text-4xl bg-gondola text-alto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
