import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const websiteAudit = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24">
        <h1 className="pt-12 pb-6">Audits &amp; Consulting</h1>
        <p></p>
      </div>
      <ServiceOfferings />
    </Layout>
  );
};

export default websiteAudit;
