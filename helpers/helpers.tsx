import { pa11yResponse } from "../types/accessibility-checker";

export const PrefersColourSchemeDark = () => {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false;
};

export const getA11y = async (url: string) => {
  let data: pa11yResponse = await fetch(`/api/a11y?page=${url}`).then((res) =>
    res.json()
  );

  return data;
};
