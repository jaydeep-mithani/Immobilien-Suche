"use client";

import React, { useState, useEffect } from "react";
import { LocationIcon } from "../icons";

interface SearchableDropdownProps {
  options: string[];
  placeholder?: string;
  className?: string;
  onItemChange?: (selectedValue: string) => void;
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  placeholder,
  className,
  onItemChange = () => {},
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, options]);

  useEffect(() => {
    onItemChange(selectedOption);
  }, [selectedOption]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setQuery(option);
    setIsFocused(false);
  };

  const handleInputFocus = () => setIsFocused(true);

  const handleInputBlur = () => {
    setIsFocused(false);
    if (query.trim() === "") setSelectedOption("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <div className={`relative mb-12 xl:mb-2 w-full ${className}`}>
      <div className="w-full border-2 border-gray-400 rounded-[4px] flex items-center px-4 py-1">
        <LocationIcon />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          className="w-full p-2 text-base outline-none"
        />
      </div>
      <ul
        className={`${
          isFocused ? "opacity-100" : "opacity-0"
        } absolute top-[105%] left-0 right-0 border-t-0 bg-background max-h-40 overflow-y-auto z-10 mt-1 rounded-[4px]`}
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-[#748790] hover:text-background active:bg-gray-400"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))
        ) : (
          <li className="p-2 cursor-pointer hover:bg-gray-200 active:bg-gray-400">
            No options found
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchableDropdown;
