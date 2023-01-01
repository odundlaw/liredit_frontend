import {
  ArrowUpOnSquareStackIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Button from "../../../components/Button";

interface FilterRedisProps {}

const FilterRedis: React.FC<FilterRedisProps> = () => {
  return (
    <div className="flex items-center bg-white w-full h-7 px-4 py-7 border border-gray-300 hover:border-gray-400 hover:transition-all rounded-md justify-between">
      <div className="flex items-center gap-2">
        <Button
          type="button"
          className="flex items-center text-sm font-bold text-blue-500 bg-slate-100 rounded-full px-4 py-2 hover:opacity-80 hover:transition-all gap-1"
        >
          <MapPinIcon className="w-5 h-5 text-blue-500" /> Hot{" "}
        </Button>
        <Button
          type="button"
          className="flex items-center text-sm font-bold text-blue-500 bg-slate-100 rounded-full px-4 py-2 hover:opacity-80 hover:transition-all gap-1"
        >
          Everywhere <ChevronDownIcon className="w-5 h-5 text-blue-300" />
        </Button>
        <Button
          type="button"
          className="flex items-center text-sm font-bold text-gray-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:transition-all gap-1"
        >
          <Cog8ToothIcon className="w-5 h-5 text-gray-400" />
          New
        </Button>
        <Button
          type="button"
          className="flex items-center text-sm font-bold text-gray-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:transition-all gap-1"
        >
          <ArrowUpOnSquareStackIcon className="w-5 h-5 text-gray-400" />
          Top
        </Button>
        <Button
          type="button"
          className="flex items-center text-sm font-bold text-gray-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:transition-all gap-1"
        >
          <EllipsisHorizontalIcon className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
      <Button
        type="button"
        className="flex items-center text-sm font-bold text-gray-500 rounded-full px-4 py-2 hover:bg-slate-200 hover:transition-all gap-1 float-right"
      >
        {" "}
        <TableCellsIcon className="w-5 h-5 text-gray-400" />
        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </Button>
    </div>
  );
};

export default FilterRedis;
