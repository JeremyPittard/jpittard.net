import Head from "next/head";
import { Content, Inter } from "@next/font/google";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import IntroContent from "../components/IntroContent";
import ServiceOfferings from "../components/ServiceOfferings";
import RecommendedServicesIntro from "../components/RecommendedServicesIntro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <motion.main>
          <IntroContent />
          <ServiceOfferings />
          <RecommendedServicesIntro />
        </motion.main>
      </Layout>
    </>
  );
}
