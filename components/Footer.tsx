import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[80%] md:max-w-4xl mx-auto py-3 px-2">
      <nav>
        <ul className="flex gap-4 text-sm mt-24 pt-32">
          <li>
            <Link href={"https://www.facebook.com/Jpittardweb"} target="_blank">
              fb
            </Link>
          </li>
          <li>
            <Link href={"/home"}>home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
