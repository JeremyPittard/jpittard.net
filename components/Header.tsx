import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";

const Header = () => {
  const router = useRouter();
  return (
    <header className="pt-24 py-3 px-2">
      <nav className=" py-3 px-2 max-w-[80%] md:max-w-3xl mx-auto flex justify-between">
        <Link href={"/"} scroll={false}>
          <Logo />
        </Link>
        <ul className="flex gap-4 text-lg items-center justify-start">
          <li>
            <Link className="hoverline" href={"/store/diy-solutions"}>
              tools
            </Link>
          </li>
          <li>
            <Link className="hoverline" href={"/website-builds"} scroll={false}>
              builds
            </Link>
          </li>
          <li>
            <Link className="hoverline" href={"/blog"} scroll={false}>
              blog
            </Link>
          </li>
          <li>
            <Link className="hoverline" href={"/website-audits"} scroll={false}>
              consulting
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
