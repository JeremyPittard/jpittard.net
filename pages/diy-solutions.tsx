import React from "react";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const diySolutions = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-4xl mx-auto mb-24">
        <p>
          Printable workbooks, guides and templates to help improve your sites
          accessibility, core web vitals and SEO with no code.
          <span className="font-bold text-neon-pink block py-6">
            Coming Soon...
          </span>
        </p>
      </div>
      <ServiceOfferings />
    </Layout>
  );
};

export default diySolutions;
