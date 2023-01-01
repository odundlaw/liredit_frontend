import React from "react";

interface FormErrorProps {
  children: React.ReactNode
}

const FormErrors: React.FC<FormErrorProps> = ({ children }) => {
  return <span className="text-xs text-red-400 font-normal px-2 py-0">{children}</span>;
};

export default FormErrors;
