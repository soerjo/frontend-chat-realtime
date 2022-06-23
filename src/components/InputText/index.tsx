import React, { ReactElement } from "react";

interface InputTextProps {
  Icon?: ReactElement;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  name?: string;
  value: string;
}

const InputText: React.FC<InputTextProps> = ({
  Icon,
  onChange,
  name,
  placeholder,
  value,
}) => {
  return (
    <label className="relative block">
      {Icon && (
        <>
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {Icon}
          </span>
        </>
      )}
      <input
        className={`placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 ${
          Icon ? "pl-9" : "pl-3"
        } pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm`}
        placeholder={placeholder}
        type="text"
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
};

export default InputText;
