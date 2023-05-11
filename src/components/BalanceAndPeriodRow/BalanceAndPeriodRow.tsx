import React from "react";
import Balance from "./Balance";
import Period from "./Period";

interface BalanceAndPeriodRowProps {}

const BalanceAndPeriodRow: React.FC<BalanceAndPeriodRowProps> = ({}) => {
  return (
    <div className="flex justify-end items-center h-10 mb-2">
      <div className="space-x-[50px] flex items-center text-[14px]">
        <Balance />
        <Period />
      </div>
    </div>
  );
};

export default BalanceAndPeriodRow;
