import {
  ChevronDownIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import useAuthState from "../../context/AuthContext/AuthState";
import Button from "../Button";
import SearchBar from "./SearchBar";

interface HeaderProps {
  toggleModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleModal }) => {
  const { isLoggedIn, logOut } = useAuthState();
  return (
    <div className="h-12 bg-white w-full border-b-slate-900 flex justify-between items-center px-4 py-1 gap-4 fixed top-0 z-20">
      <h1 className="font-bold text-lg text-orange-600 flex items-center gap-1">
        LiredIt <WrenchScrewdriverIcon className="h-6 w-6 text-blue-500" />
      </h1>
      <SearchBar />
      <div className="flex items-center justify-between space-x-4">
        <p className="py-1 px-2 bg-slate-100 rounded-md cursor-pointer hover:opacity-75 hover:transition-all">
          Icon
        </p>
        <Button
          className="rounded-full px-8 py-2 text-sm text-black font-bold bg-slate-200 hover:opacity-75 hover:transition-all shrink-0"
          type="button"
        >
          Get App
        </Button>
        {isLoggedIn ? (
          <Button
            className="rounded-full text-sm px-8 py-2 text-white font-bold bg-slate-700 hover:opacity-75 hover:transition-all"
            type="button"
            onClick={logOut}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="rounded-full text-sm px-8 py-2 text-white font-bold bg-orange-700 hover:opacity-75 hover:transition-all"
            type="button"
            onClick={toggleModal}
          >
            Login
          </Button>
        )}
        <p className="flex items-center justify-center px-2 gap-1 py-1 border border-slate-100 rounded-sm hover:bg-slate-100 hover:transition-all cursor-pointer">
          <UserIcon className="h-6 w-6 text-slate-500 font-bold" />
          <ChevronDownIcon className="h-5 w-5 text-slate-500 font-bold" />
        </p>
      </div>
    </div>
  );
};

export default Header;
