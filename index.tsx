import React from "react";

const FEATURE_LIST: { done: boolean; name: string }[] = [
  {
    name: "bun access",
    done: false,
  },
  {
    name: "bun adduser",
    done: false,
  },
  {
    name: "bun audit",
    done: false,
  },
  {
    name: "bun bugs",
    done: false,
  },
  {
    name: "bun cache",
    done: false,
  },
  {
    name: "bun ci",
    done: false,
  },
  {
    name: "bun completion",
    done: false,
  },
  {
    name: "bun config",
    done: false,
  },
  {
    name: "bun dedupe",
    done: false,
  },
  {
    name: "bun deprecate",
    done: false,
  },
  {
    name: "bun diff",
    done: false,
  },
  {
    name: "bun dist-tag",
    done: false,
  },
  {
    name: "bun docs",
    done: false,
  },
  {
    name: "bun doctor",
    done: false,
  },
  {
    name: "bun edit",
    done: false,
  },
  {
    name: "bun exec",
    done: false,
  },
  {
    name: "bun explain",
    done: false,
  },
  {
    name: "bun explore",
    done: false,
  },
  {
    name: "bun find-dupes",
    done: false,
  },
  {
    name: "bun fund",
    done: false,
  },
  {
    name: "bun get",
    done: false,
  },
  {
    name: "bun help",
    done: true,
  },
  {
    name: "bun install",
    done: true,
  },
  {
    name: "bun link",
    done: true,
  },
  {
    name: "bun run",
    done: true,
  },
  {
    name: "bun remove",
    done: true,
  },
  {
    name: "bun test",
    done: true,
  },
  {
    name: "bun unlink",
    done: true,
  },
];

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
    <div className="max-w-xs md:max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Is Bun still baking?</h1>
      <p className="text-xl mb-4">
        Yes,{" "}
        <a href="https://bun.sh/" target="_blank" className="text-indigo-800">
          Bun
        </a>{" "}
        is still baking.
      </p>
      <p className="text-xl mb-4">v1.0.1 (last updated Sep-12-2023)</p>

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
