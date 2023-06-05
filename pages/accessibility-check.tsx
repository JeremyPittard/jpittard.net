import { FormEvent, useState } from "react";
import Layout from "../components/Layout";
import { getA11y } from "../helpers/helpers";
import { pa11yIssues } from "../types/accessibility-checker";

const AccessibilityCheck = () => {
  const [urlToCheck, setUrlToCheck] = useState<string>("");
  const [issues, setIssues] = useState<Array<pa11yIssues>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runA11yCheck = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    getA11y(urlToCheck)
      .then((response) => {
        setIssues(response.issues);
        console.table(response.issues);
      })
      .then(() => setIsLoading(false));
  };

  const updateUrl = (newValue: string) => {
    console.log(newValue);
    setUrlToCheck(newValue);
  };
  return (
    <Layout>
      <div className="max-w-[80%] lg:max-w-3xl mx-auto mb-24 pb-6">
        <h1 className="md:pt-12 py-6">Accessibility Check</h1>
        <form className="py-3 px-4" onSubmit={(event) => runA11yCheck(event)}>
          <label htmlFor="urlInput">
            Enter your websites url to run an accessibility check
          </label>
          <input
            id="urlInput"
            className="mt-2 text-gondola"
            type={"text"}
            onChange={(event) => updateUrl(event.target.value)}
          />
          <button type="submit">Go!</button>
        </form>
      </div>
    </Layout>
  );
};

export default AccessibilityCheck;
