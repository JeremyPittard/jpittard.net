/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Card from "./Card";
import Layout from "./Layout";
import ServiceOfferings from "./ServiceOfferings";

const IntroContent = () => {
  return (
    <>
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
    </>
  );
};

export default IntroContent;
