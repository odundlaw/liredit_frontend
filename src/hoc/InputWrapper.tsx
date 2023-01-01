import React from "react";

interface InputWrapperProper {
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProper> = ({
  children,
}): JSX.Element => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export default InputWrapper;
