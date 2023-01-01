import {
  ArrowUturnRightIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Button from "../../../components/Button";

interface SingleReditProps {}

const SingleRedit: React.FC<SingleReditProps> = () => {
  return (
    <div className="relative flex bg-white w-full h-fit border border-gray-300 hover:border-gray-400 hover:transition-all rounded-md cursor-pointer">
      <div className="absolute h-full w-[8%] bg-slate-100 rounded-l-lg">
        <div className="flex flex-col justify-center items-center pt-4 gap-2">
          <Button
            className="p-1 rounded-md hover:bg-slate-200 hover:transition-all hover:transform-gpu"
            type="button"
          >
            <HandThumbUpIcon className="h-5 w-5 text-slate-500" />
          </Button>
          <p className="text-sm font-semibold text-slate-600">40.0K</p>
          <Button
            className="p-1 rounded-md hover:bg-slate-200 hover:transition-all hover:transform-gpu"
            type="button"
          >
            <HandThumbDownIcon className="h-5 w-5 text-slate-500" />
          </Button>
        </div>
      </div>
      <div className="w-[92%] p-2 ml-[8%]">
        <article className="flex flex-col items-start justify-between space-y-3">
          <header className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center w-full">
              <div className="p-1 bg-slate-100 rounded-full">
                <UserIcon className="w-4 h-4 text-slate-600 font-extrabold " />{" "}
              </div>
              <span className="text-xs font-bold text-slate-700 hover:underline hover:transition-all">
                r/movies
              </span>
              <span className="border border-slate-500 rounded-full align-self-center"></span>
              <span className="text-xs text-slate-400 font-normal ">
                {" "}
                Posted by{" "}
                <span className="hover:underline hover:transition-all">
                  {"u/Shittu Odunayo "}
                </span>{" "}
                at {"1 day Ago"}
              </span>
            </div>
            <div>
              <Button
                type="button"
                className="bg-blue-500 rounded-full px-3 text-white text-sm font-black py-1 hover:opacity-80 hover:transition-all"
              >
                Join
              </Button>
            </div>
          </header>
          <article className="text-sm text-justify pr-4 space-y-3">
            <h2 className="text-lg font-semibold font-sans text-black">
              What Movie Had The Perfect Song At The Perfect Moment?
            </h2>
            <p>
              The moment in Royal Tennenbaums when ‘Ruby Tuesday’ starts
              playing. I never liked that song much until I saw the movie, now I
              love it. ‘These Days’ by Nico, which plays right before it, is
              also one if my all-time faves, but Ruby Tuesday kicks you right in
              the gut. If you could please include the name of the song (Title -
              Artist) along with the movie title and what's happening the moment
              it plays for those of us that know the plot. Here are other films
              that have the perfect song at the perfect moment
            </p>
            <p>PLEASE USE SPOILER TEXT IF NECESSARY!!!!</p>
          </article>
          <footer className="flex mb-4">
            <Button
              type="button"
              className="text-slate-500 flex items-center gap-1 text-xs font-bold rounded-md px-3 py-2 hover:bg-slate-100 hover:transition-all"
            >
              <ChatBubbleLeftIcon className="w-5 h-5 text-slate-400" />
              {"5.4k"} Comments
            </Button>
            <Button
              type="button"
              className="text-slate-500 flex items-center gap-1 text-xs font-bold rounded-md px-3 py-2 hover:bg-slate-100 hover:transition-all"
            >
              <ArrowUturnRightIcon className="w-5 h-5 text-slate-400" />
              Share
            </Button>
            <Button
              type="button"
              className="text-slate-500 flex items-center gap-1 text-xs font-bold rounded-md px-3 py-2 hover:bg-slate-100 hover:transition-all"
            >
              <BookmarkIcon className="w-5 h-5 text-slate-400" />
              Save
            </Button>
            <Button
              type="button"
              className="text-slate-500 flex items-center gap-1 text-xs font-bold rounded-md px-3 py-2 hover:bg-slate-100 hover:transition-all"
            >
              <EllipsisHorizontalIcon className="w-5 h-5 text-slate-400" />
            </Button>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default SingleRedit;
