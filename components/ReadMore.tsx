import Link from "next/link";
import React from "react";

const ReadMore = ({ url, target = "_self" }) => {
  return (
    <Link href={url} target={target}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 48 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66635 42.4449L3.06828 43.9449L2.20225 44.4449L1.2202 46.7439L3.45225 46.6099L8.16635 46.775L39.3433 28.775L41.9413 27.275L43.1734 25.409L40.6913 25.1099L36.8433 24.4449L5.66635 42.4449Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          d="M8.76795 7.85993L6.16988 6.35993L5.30385 5.85993L4.3218 3.56089L6.55385 3.69486L11.268 3.5298L42.4449 21.5298L45.0429 23.0298L46.275 24.8958L43.7929 25.1949L39.9449 25.8599L8.76795 7.85993Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </Link>
  );
};

export default ReadMore;
