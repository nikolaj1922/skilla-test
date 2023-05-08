import React from "react";
import { ArrowLeft, ArrowRight, Calendar } from "../ui/svg";
import DateMenu from "./DateMenu";

interface PeriodProps {}

const Period: React.FC<PeriodProps> = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="flex items-center justify-center space-x-[21px] relative">
      <ArrowLeft />
      <div
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <Calendar />
        <span className="text-[#005FF8]">3 дня</span>
      </div>
      <ArrowRight />
      {open && <DateMenu open={open} period="3 дня" setOpen={setOpen} />}
    </div>
  );
};

export default Period;
