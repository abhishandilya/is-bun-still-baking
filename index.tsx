// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>Is Bun still baking?</title>
//     <script src="https://cdn.tailwindcss.com"></script>
//   </head>
//   <body class="max-w-lg mx-auto">
//     <p class="text-2xl mb-4">Is Bun still baking?</p>
//     <p class="text-xl mb-4">Yes, Bun is still baking.</p>
//     <p class="text-xl mb-4">v1.0.1 (last updated Sep-12-2023)</p>
//     <div>
//       <h4 class="sr-only">Status</h4>
//       <p class="text-sm font-medium text-gray-900">baking progress...</p>
//       <div class="mt-6" aria-hidden="true">
//         <div class="overflow-hidden rounded-full bg-gray-200">
//           <div class="h-2 rounded-full bg-gray-600" style="width: 50%"></div>
//         </div>
//       </div>
//     </div>

//     <fieldset class="mt-4">
//       <div class="space-y-5">
//         <div class="relative flex items-start">
//           <div class="flex h-6 items-center">
//             <input
//               type="checkbox"
//               disabled="true"
//               checked="true"
//               class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
//             />
//           </div>
//           <div class="ml-3 text-sm leading-6">
//             <label class="font-medium text-gray-900">install</label>
//           </div>
//         </div>
//         <div class="relative flex items-start">
//           <div class="flex h-6 items-center">
//             <input
//               type="checkbox"
//               disabled="true"
//               checked="true"
//               class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600"
//             />
//           </div>
//           <div class="ml-3 text-sm leading-6">
//             <label class="font-medium text-gray-900">install</label>
//           </div>
//         </div>
//       </div>
//     </fieldset>
//   </body>
// </html>

import React from "react";

function ProgressBar({ progress = 100 }) {
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
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl mb-4">Is Bun still baking?</h1>
      <p className="text-xl mb-4">Yes, Bun is still baking.</p>
      <p className="text-xl mb-4">v1.0.1 (last updated Sep-12-2023)</p>

      <ProgressBar progress={50} />
    </div>
  );
}

export default App;
