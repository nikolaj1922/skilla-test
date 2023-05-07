import React from "react";
import { ArrowLeft, ArrowRight, Calendar } from "../ui/svg";

interface PeriodProps {}

const Period: React.FC<PeriodProps> = ({}) => {
  return (
    <div className="flex items-center justify-center space-x-[21px]">
      <ArrowLeft />
      <div className="flex items-center space-x-2 cursor-pointer group">
        <Calendar/>
        <span className="text-[#005FF8]">3 дня</span>
      </div>
      <ArrowRight/>
    </div>
  );
};

export default Period;
