/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Card from "./Card";
import Layout from "./Layout";

const IntroContent = () => {
  return (
    <Layout>
      <div className="max-w-[80%] md:max-w-4xl mx-auto mb-24">
        <h1 className="pt-12 pb-6">Digital consulting and web development.</h1>
        <p className="py-6">
          Specialising in helping
          <span className="text-neon-pink font-bold"> small businesses </span>
          and
          <span className="text-neon-pink font-bold"> sports clubs </span>
          kick off and improve their
          <span className=" text-neon-blue font-bold"> digital presence.</span>
        </p>
        <p className="py-6">
          <Link
            href={`mailto:jeremy@jpittard.net`}
            className="font-bold text-neon-green"
          >
            get in touch
          </Link>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Card title={`DIY Solutions`} link="/store">
          <p>
            Tools to help identify and fix issues with accessibility, page speed
            and core web vitals
          </p>
          <p>coming soon</p>
        </Card>
        <Card title={`Complete Builds`} bgClass="bg-neon-blue" link="/store">
          <p>
            Tools to help identify and fix issues with accessibility, page speed
            and core web vitals
          </p>
          <p>coming soon</p>
        </Card>
        <Card
          title={`Audits & Consulting`}
          bgClass="bg-neon-green"
          link="/store"
        >
          <p>
            Tools to help identify and fix issues with accessibility, page speed
            and core web vitals
          </p>
          <p>coming soon</p>
        </Card>
      </div>
    </Layout>
  );
};

export default IntroContent;
