import React from "react";
import Balance from "./Balance";
import Period from "./Period";

interface BalanceAndPeroidRowProps {}

const BalanceAndPeroidRow: React.FC<BalanceAndPeroidRowProps> = ({}) => {
  return (
    <div className="flex justify-end items-center h-10 mb-5">
      <div className="space-x-12 flex items-center">
        <Balance />
        <Period />
      </div>
    </div>
  );
};

export default BalanceAndPeroidRow;
