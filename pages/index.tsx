import Layout from "../components/Layout";
import { motion } from "framer-motion";
import IntroContent from "../components/IntroContent";

export default function Home() {
  return (
    <>
      <Layout>
        <motion.main>
          <IntroContent />
        </motion.main>
      </Layout>
    </>
  );
}
