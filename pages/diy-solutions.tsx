import React from "react";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const diySolutions = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24 p-6">
        <p className="py-6">
          Printable workbooks, guides and templates to help improve your sites
          accessibility, core web vitals and SEO with no code.
        </p>
        <span className="font-bold text-neon-pink block py-6">
          Coming Soon...
        </span>
      </div>
      <ServiceOfferings />
    </Layout>
  );
};

export default diySolutions;
