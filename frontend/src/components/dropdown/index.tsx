"use client";

import { LabelHTMLAttributes, useEffect, useState } from "react";
import { ChrevronDownIcon } from "../icons";

interface DropdownProps extends LabelHTMLAttributes<HTMLLabelElement> {
  options: Array<{ label: string | number; value: string | number }>;
  label?: string;
  onItemChange?: (selectedValue: {
    label: string | number;
    value: string | number;
  }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  label = "",
  className,
  onItemChange = () => {},
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<{
    label: string | number;
    value: string | number;
  }>({ label: label ? label : "", value: "na" });

  useEffect(() => {
    onItemChange(selectedValue);
  }, [selectedValue]);

  return (
    <div
      className={`relative pl-2 py-3 pr-9 border-2 border-gray-400 rounded-[4px] mb-2 w-full ${className}`}
    >
      <div onClick={() => setOpen((prev) => !prev)}>
        <label
          {...props}
          className="outline-none p-2 appearance-none w-full capitalize"
        >
          {selectedValue.label}
        </label>
        <ChrevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2" />
      </div>
      {open && (
        <ul className="absolute top-full w-full left-0 right-0 max-h-40 bg-background overflow-y-auto z-10 mt-1 rounded-[4px]">
          <li
            className="p-2 hover:bg-[#748790] hover:text-background capitalize opacity-50"
            value="na"
            onClick={() => {
              setSelectedValue({ label: label ? label : "", value: "na" });
              setOpen(false);
            }}
          >
            {label ? label : ""}
          </li>
          {options.map((opt, i) => (
            <li
              className="p-2 hover:bg-[#748790] hover:text-background cursor-pointer capitalize"
              key={i + "" + opt.value}
              value={opt.label}
              onClick={() => {
                setSelectedValue({ label: opt.label, value: opt.value });
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
