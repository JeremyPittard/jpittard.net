import Head from "next/head";
import Image from "next/image";
import { Content, Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import IntroContent from "../components/IntroContent";

const inter = Inter({ subsets: ["latin"] });

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
