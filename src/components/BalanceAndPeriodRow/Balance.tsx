import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

interface BalanceProps {}

const Balance: React.FC<BalanceProps> = ({}) => {
  return (
    <div className="bg-[#fff] rounded-[48px] w-[145px] h-[40px] pl-3.5 py-2.5 text-[#899CB1] flex items-center text-sm space-x-[10px] group cursor-pointer transition duration-150 ease-out">
      <span className="items-center">
        Баланс:{" "}
        <span className="text-[#122945] font-medium group-hover:text-[#0024CB]">
          272 &#8381;
        </span>
      </span>
      <PlusCircleIcon className="h-6 w-6 text-[#005FF8] group-hover:text-[#0024CB]" />
    </div>
  );
};

export default Balance;
