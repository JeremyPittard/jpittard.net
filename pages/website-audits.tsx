import Link from "next/link";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const websiteAudit = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24">
        <h1 className="pt-12 pb-6">Audits &amp; Consulting</h1>
        <p className="py-6">
          <Link
            href={`mailto:jeremy@jpittard.net`}
            className="font-bold text-neon-green hoverline"
          >
            get in touch.
          </Link>
        </p>
      </div>
      <ServiceOfferings />
    </Layout>
  );
};

export default websiteAudit;
