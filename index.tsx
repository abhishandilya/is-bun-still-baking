import React from "react";
import { FEATURE_LIST } from "./features";

function Checkbox() {
  return (
    <fieldset>
      <legend className="sr-only">Features</legend>
      {FEATURE_LIST.map((feature) => (
        <div className="space-y-5">
          <div className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                name="comments"
                type="checkbox"
                disabled={true}
                checked={feature.done}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm leading-6">
              <label htmlFor="comments" className="font-medium text-gray-900">
                {feature.name}
              </label>
            </div>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

function ProgressBar() {
  let progress = 0;

  progress = FEATURE_LIST.reduce((acc, feature) => {
    if (feature.done) {
      return acc + 1;
    }
    return acc;
  }, 0);

  progress = Math.round((progress / FEATURE_LIST.length) * 100);

  return (
    <div>
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">
        Bun baking progress...
      </p>
      <div className="mt-2" aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-indigo-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="max-w-xs md:max-w-lg mx-auto mt-8">
      <h1 className="text-2xl mb-4">Is Bun still baking?</h1>
      <p className="text-xl mb-4">
        Yes,{" "}
        <a href="https://bun.sh/" target="_blank" className="text-indigo-800">
          Bun
        </a>{" "}
        is still baking.
      </p>
      <p className="text-xl mb-4">
        v1.0.1 <span className="text-xs">(as of Sep-12-2023)</span>
      </p>

      <ProgressBar />
      <Checkbox />

      <p className="my-6 text-indigo-800">
        <a
          href="https://github.com/abhishandilya/is-bun-still-baking"
          target="_blank"
        >
          Suggest edits on Github
        </a>
      </p>
    </div>
  );
}

export default App;
