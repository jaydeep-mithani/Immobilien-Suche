"use client";

import { LabelHTMLAttributes, useEffect, useState } from "react";
import { ChrevronDownIcon, EuroIcon } from "../icons";

interface DropdownProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label?: string;
  onItemChange?: Function;
}

const RangeDropdown: React.FC<DropdownProps> = ({
  label = "",
  className,
  onItemChange = () => {},
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 0 });
  const [range, setRange] = useState("");

  useEffect(() => {
    onItemChange(range);
  }, [range]);

  return (
    <div
      className={`relative pl-2 py-3 pr-9 border-2 border-gray-400 rounded-[4px] mb-2 w-full ${className}`}
    >
      <div
        onClick={() => {
          setOpen((prev) => !prev);
          setRange(`${selectedValue.min}-${selectedValue.max}`);
        }}
      >
        <label
          {...props}
          className="outline-none p-2 appearance-none w-full capitalize"
        >
          {selectedValue.min === 0 && selectedValue.max === 0
            ? label
              ? label
              : ""
            : `${selectedValue.min} - ${selectedValue.max}`}
        </label>
        <ChrevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2" />
      </div>
      {open && (
        <div className="absolute top-[105%] w-full xl:w-[150%] left-0 right-0 max-h-40 bg-background overflow-y-auto z-10 mt-1 rounded-[4px] flex items-center gap-2">
          <div className="flex items-center border-2 border-gray-400 rounded-[4px] pr-2 overflow-hidden">
            <input
              className="outline-none p-2 min-w-0"
              type="number"
              placeholder="min"
              value={selectedValue.min}
              min={0}
              onChange={(e) =>
                setSelectedValue((prev) => ({
                  ...prev,
                  min: isNaN(Number(e.target.value))
                    ? 0
                    : Number(e.target.value),
                }))
              }
            />
            <EuroIcon className="w-4 h-4 xl:w-8 xl:h-8" />
          </div>
          <div className="flex items-center border-2 border-gray-400 rounded-[4px] pr-2 overflow-hidden">
            <input
              className="outline-none p-2 min-w-0"
              type="number"
              placeholder="max"
              value={selectedValue.max}
              min={0}
              onChange={(e) =>
                setSelectedValue((prev) => ({
                  ...prev,
                  max: isNaN(Number(e.target.value))
                    ? 0
                    : Number(e.target.value),
                }))
              }
            />
            <EuroIcon className="w-4 h-4 xl:w-8 xl:h-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RangeDropdown;
