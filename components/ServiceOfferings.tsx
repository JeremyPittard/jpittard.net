import Card from "./Card";

const ServiceOfferings = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-24 px-4 md:px-1">
      <Card title={`DIY Solutions`} link="/diy-solutions">
        <p>
          Tools to help identify and fix issues with accessibility, page speed
          and core web vitals.
        </p>
        <p>coming soon...</p>
      </Card>
      <Card
        title={`Complete Builds`}
        bgClass="bg-neon-blue"
        link="/website-builds"
      >
        <p>
          Websites and Apps built from the ground up, SEO ready, focusing on
          accessibility, page speed and a great user experience.
        </p>
      </Card>
      <Card
        title={`Audits & Consulting`}
        bgClass="bg-neon-green"
        link="/website-audits"
      >
        <p>
          Reviews in Accessibility, UI/UX, Core Web Vitals and more. Plus
          coaching on all things digital.
        </p>
      </Card>
    </div>
  );
};

export default ServiceOfferings;
