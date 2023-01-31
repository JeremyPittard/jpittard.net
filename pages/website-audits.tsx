import Link from "next/link";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const websiteAudit = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24">
        <h1 className="pt-12 pb-6">Audits and Consulting</h1>
        <p className="py-6">
          Reviews in Accessibility, UI/UX, Core Web Vitals and more. Plus
          coaching on all things digital.
        </p>
        <p className="py-6">
          <Link
            href={`mailto:jeremy@jpittard.net?subject=Audits and Consulting`}
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
