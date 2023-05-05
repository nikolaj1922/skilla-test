import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

interface PeriodProps {}

const Period: React.FC<PeriodProps> = ({}) => {
  return (
    <div className="flex items-center justify-center space-x-[18px]">
      <ChevronLeftIcon className="h-4 w-4 icon" />
      <div className="flex items-center space-x-2 cursor-pointer group">
        <CalendarIcon className="h-6 w-6 icon group-hover:text-[#002CFB]" />
        <span className="text-[#005FF8]">3 дня</span>
      </div>
      <ChevronRightIcon className="h-4 w-4 icon" />
    </div>
  );
};

export default Period;
