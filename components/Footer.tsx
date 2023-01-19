import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[80%] md:max-w-4xl mx-auto py-3 px-2 border-t-[1px] border-alto-50 border-opacity-25">
      <nav>
        <ul className="flex gap-4 text-sm items-center justify-start">
          <li>
            <Link href={`mailto:jeremy@jpittard.net`}>get in touch</Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/Jpittardweb"} target="_blank">
              facebook
            </Link>
          </li>
          <li>
            <Link href={"/"}>home</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
