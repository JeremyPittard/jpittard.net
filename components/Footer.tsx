import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[80%] lg:max-w-3xl mx-auto py-3 px-2 border-t-[1px] border-alto-50 border-opacity-25">
      <nav>
        <ul className="flex gap-4 text-sm items-center justify-start">
          <li>
            <Link href={"/"} scroll={false} className="hoverline">
              home
            </Link>
          </li>
          <li>
            <Link
              href={`mailto:jeremy@jpittard.net`}
              scroll={false}
              className="hoverline"
            >
              get in touch
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.facebook.com/Jpittardweb"}
              target="_blank"
              scroll={false}
              className="hoverline"
            >
              facebook
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
