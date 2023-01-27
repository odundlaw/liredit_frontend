import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../components/Button";

interface Wrapper {
  children: React.ReactNode;
  onClose?: () => void;
}

const FormWrapper: React.FC<Wrapper> = ({ children, onClose }): JSX.Element => {
  return (
    <div className="flex-col flex justify-start items-center w-[32%] bg-white shadow-lg gap-4 h-screen z-50">
      <div className="p-2 w-full text-right" onClick={onClose}>
        <Button className="p-2 bg-slate-100 rounded-md" type="button">
          <XMarkIcon className="w-5 h-5 text-gray-800" />
        </Button>
      </div>
      <div className="px-16 space-y-6">{children}</div>
    </div>
  );
};

export default FormWrapper;
