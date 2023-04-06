import Link from "next/link";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const websiteBuild = () => {
  return (
    <Layout>
      <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24">
        <h1 className="md:pt-12 py-6">Website and Application builds</h1>
        <p className="py-6">
          creating
          <span className="text-neon-pink font-bold"> accessible </span>
          and
          <span className="text-neon-pink font-bold"> SEO ready </span>
          websites, apps, eCommerce platforms, and custom digital solutions that
          are
          <span className="text-neon-blue font-bold"> ready for success </span>
          from the start.
        </p>
        <p className="py-6">
          <Link
            href={`mailto:jeremy@jpittard.net?subject=Website and Application builds`}
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

export default websiteBuild;
