import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import IntroContent from "../components/IntroContent";
import ServiceOfferings from "../components/ServiceOfferings";
import RecommendedServicesIntro from "../components/RecommendedServicesIntro";

export default function Home() {
  return (
    <>
      <Layout>
        <motion.main>
          <IntroContent />
          <ServiceOfferings />
        </motion.main>
      </Layout>
    </>
  );
}
