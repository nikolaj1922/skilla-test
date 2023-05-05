import React from "react";
import Search from "./Search";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { filters } from "./filters";

interface FilterRowProps {}

const FilterRow: React.FC<FilterRowProps> = ({}) => {
  return (
    <div className="text-[#5E7793] text-sm flex items-center justify-between">
      <Search />
      <div className="flex items-center justify-center space-x-[36px]">
        {filters.map((item) => (
          <div
            key={item}
            className="group flex space-x-[8px] justify-center items-center cursor-pointer"
          >
            <span className="group-hover:text-[#002CFB] transition duration-150 ease-out">
              {item}
            </span>
            <ChevronDownIcon className="icon h-4 w-4 group-hover:text-[#002CFB]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterRow;
