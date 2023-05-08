import React from "react";
import AppBar from "./components/AppBar/AppBar";
import BalanceAndPeroidRow from "./components/BalanceAndPeriodRow/BalanceAndPeroidRow";
import FilterRow from "./components/FilterRow/FilterRow";
import CallTable from "./components/CallTable/CallTable";
import { getCallsRequest } from "./lib/axios";
import { Calls } from "./lib/types";
import { getFullDate } from "./lib/utils";

const App: React.FC = () => {
  const [calls, setCalls] = React.useState<null | Calls>(null);
  const [dateEnd, setDateEnd] = React.useState<string>(getFullDate());
  const [duration, setDuration] = React.useState<number>(-3);
  const [inOut, setInOut] = React.useState<number | null>(null);

  React.useEffect(() => {
    const getCalls = async () => {
      const { data } = await getCallsRequest.post(
        `/getList?date_start=${getFullDate(duration)}&date_end=${dateEnd}${
          inOut !== null ? `&in_out=${inOut}` : ""
        }`
      );
      setCalls(data);
    };
    getCalls();
  }, [setInOut, duration]);

  return (
    <div className="ml-[240px]">
      <AppBar />
      <div className="mt-[84px] w-[1440px] ml-[120px]">
        <BalanceAndPeroidRow />
        <FilterRow />
        <CallTable calls={calls} />
      </div>
    </div>
  );
};

export default App;
