import Layout from "../components/Layout";
import ServiceOfferings from "../components/ServiceOfferings";

export default function Custom404() {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-3xl mx-auto mb-24 pb-6">
        <h1>404 - Page Not Found</h1>
      </div>
      <ServiceOfferings />
    </Layout>
  );
}
