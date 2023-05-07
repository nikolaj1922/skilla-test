import React from "react";
import SearchBar from "./SearchBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { filters } from "./filters";
import { ArrowDown } from "../ui/svg";

interface FilterRowProps {}

const FilterRow: React.FC<FilterRowProps> = ({}) => {
  return (
    <div className="text-[#5E7793] text-sm flex items-center justify-between py-[14px] w-[1440px]">
      <SearchBar />
      <div className="flex items-center justify-center space-x-[35px]">
        {filters.map((item) => (
          <div
            key={item}
            className="group flex space-x-2 justify-center items-center cursor-pointer"
          >
            <span className="group-hover:text-[#002CFB] transition duration-150 ease-out">
              {item}
            </span>
            <ArrowDown />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterRow;
