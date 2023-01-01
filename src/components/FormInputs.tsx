import React from "react";

interface FormInputsProps {
  label: string;
  type: "text" | "password";
  required: boolean;
  error: boolean;
}

const FormInputs: React.FC<FormInputsProps> = ({
  label,
  type,
  required,
  error,
  ...rest
}) => {
  return (
    <div
      className={`group flex flex-col text-sm border ${
        error
          ? "border border-red-400"
          : "border-slate-200 hover:border-slate-300"
      }  rounded-full px-3 py-4 bg-neutral-50 h-11`}
    >
      <input
        type={type}
        className={`peer ring-0 outline-none bg-neutral-50 valid:bg-neutral-50 focused:bg-neutral-50 autofill:bg-transparent`}
        required={required}
        placeholder=" "
        {...rest}
      />
      <label
        htmlFor={label}
        className="-translate-y-6 group-hover:-translate-y-9 transition-all duration-300 scale-75 origin-[0] left-2.5 peer:focus:-translate-y-9 peer-valid:-translate-y-9 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-valid:scale-75"
      >
        <span className="text-zinc-500 font-semibold">{label}:</span>
      </label>
    </div>
  );
};

export default FormInputs;
