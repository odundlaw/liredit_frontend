import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface PopularPostBannerProps {}

const PopularPostBanner: React.FC<PopularPostBannerProps> = () => {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-zinc-800 text-sm font-semibold font-sans">
        Popular Posts
      </h2>
      <div className="w-full h-auto bg-white rounded-lg border border-gray-300 px-4 py-2 pb-8 space-y-3">
        <header className="flex items-center justify-between">
          <h1 className="text-sm text-slate-900 font-semibold font-mono">
            UPDATES FROM REDDIT
          </h1>
          <button className="p-1 bg-slate-100 hover:opacity-75 hover:transition-300">
            <XMarkIcon className="h-6 w-6 text-gray-500" />
          </button>
        </header>
        <article className="flex items-center w-full justify-center">
          <div className="border border-gray-300 rounded-md w-[85%] justify-items-center py-3 px-4 space-y-4 hover:opacity-80 hover:transition-300 cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                2022 was bananas!
              </h3>
              <p className="text-xs text-gray-500 font-normal font-sans">
                {" "}
                Your 2022 Reddit Recap is here - check it out and see how your
                year stacked up
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PopularPostBanner;
