import React from "react";
import Balance from "./Balance";
import Period from "./Period";

interface BalanceAndPeroidRowProps {}

const BalanceAndPeroidRow: React.FC<BalanceAndPeroidRowProps> = ({}) => {
  return (
    <div className="flex justify-end items-center h-10 mb-5">
      <div className="space-x-[48px] flex items-center text-[14px]">
        <Balance />
        <Period />
      </div>
    </div>
  );
};

export default BalanceAndPeroidRow;
