import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
  className: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
