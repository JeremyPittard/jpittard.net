import React from "react";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24 pb-6">
        <h1 className="md:pt-12 py-6">Blog</h1>

        <span className="font-bold text-neon-pink block py-6">
          Coming Soon...
        </span>
      </div>
      <ServiceOfferings />
    </Layout>
  );
};

export default Blog;
