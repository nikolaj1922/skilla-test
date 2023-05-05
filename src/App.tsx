import React from "react";
import AppBar from "./components/AppBar/AppBar";
import BalanceAndPeroidRow from "./components/BalanceAndPeriodRow/BalanceAndPeroidRow";
import FilterRow from "./components/FilterRow/FilterRow";
import CallTable from "./components/CallTable/CallTable";

const App: React.FC = () => {
  return (
    <div className="ml-[240px]">
      <AppBar />
      <div className="mt-[84px] w-[1440px] ml-[120px]">
        <BalanceAndPeroidRow />
        <FilterRow />
        <CallTable />
      </div>
    </div>
  );
};

export default App;
