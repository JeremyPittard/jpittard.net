import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MailgoConfig } from "mailgo";
import mailgo from "mailgo";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { Atkinson_Hyperlegible, Lexend } from "@next/font/google";
import { PrefersColourSchemeDark } from "../helpers/helpers";

const mailgoConfig: MailgoConfig = {
  showFooter: false,
};
const atkinson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mailgo({ ...mailgoConfig, dark: PrefersColourSchemeDark() });
  });

  const router = useRouter();
  return (
    <>
      <style jsx global>
        {`
          :root {
            --atkinson-font: ${atkinson.style.fontFamily};
            --lexend-font: ${lexend.style.fontFamily};
          }
        `}
      </style>
      <Header />
      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} key={router.pathname} />;
      </AnimatePresence>
    </>
  );
}
