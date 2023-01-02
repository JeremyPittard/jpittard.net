import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  const router = useRouter();
  return (
    <header className="pt-24 py-3 px-2">
      <nav className=" py-3 px-2 max-w-[80%] md:max-w-4xl mx-auto">
        <ul className="flex items-end m-auto flex-row">
          <li>
            <Link href={"/"} className="flex items-end">
              <Logo /> {router.pathname.replace("/", "")}
            </Link>
          </li>
          <li className="ml-auto hidden">
            <Link href={"https://www.facebook.com/Jpittardweb"} target="_blank">
              fb
            </Link>
          </li>
          <li className=" hidden">
            <Link href={"/store"}>store</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
