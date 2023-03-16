import React, { FormEvent, useState } from "react";
import { getAllJSDocTags } from "typescript";
import Layout from "../../components/Layout";
import ServiceOfferings from "../../components/ServiceOfferings";

const DiySolutions = () => {
  const getA11y = (url: string) => {
    fetch(`/api/a11y?page=${url}`)
      .then((res) => res.json())
      .then((data) => console.log("this is data", data));
  };

  const [urlToCheck, setUrlToCheck] = useState("");

  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24 pb-6">
        <h1 className="pt-12 pb-6">DIY Tools</h1>

        <p className="py-6">
          Printable workbooks, guides and templates to help improve your sites
          accessibility, core web vitals and SEO with no code.
        </p>
        <span className="font-bold text-neon-pink block py-6">
          Coming Soon...
        </span>
      </div>
      {/* <input
        type="text"
        onChange={(event) => setUrlToCheck(event.target.value)}
      />
      <button type="button" onClick={() => getA11y(urlToCheck)}>
        submit
      </button> */}
      <ServiceOfferings />
    </Layout>
  );
};

export default DiySolutions;
