import Link from "next/link";
import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

const websiteBuild = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24">
        <h1 className="pt-12 pb-6">Website and Application builds</h1>
        <p className="py-6">
          Whether you are just starting with a basic
          <span className="text-neon-pink font-bold">
            &nbsp;brochure site,&nbsp;
          </span>{" "}
          a<span className="text-neon-pink font-bold">&nbsp;CMS&nbsp;</span>
          (wordpress, contentful, etc), a fully blown
          <span className="text-neon-pink font-bold">
            &nbsp;custom client portal&nbsp;
          </span>
          or anything in between. I can put together an
          <span className="text-neon-blue font-bold">
            &nbsp;accessible, SEO ready&nbsp;
          </span>
          solution built with UX/UI best practice in mind.
        </p>
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

export default websiteBuild;
