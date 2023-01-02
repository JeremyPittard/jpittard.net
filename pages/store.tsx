import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

const store = () => {
  return (
    <Layout>
      <div>store</div>
      <Link href={"/"}>home</Link>
    </Layout>
  );
};

export default store;
