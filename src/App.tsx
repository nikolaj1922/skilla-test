import React from "react";
import AppBar from "./components/AppBar/AppBar";
import BalanceAndPeroidRow from "./components/BalanceAndPeriodRow/BalanceAndPeroidRow";
import FilterRow from "./components/FilterRow/FilterRow";
import CallTable from "./components/CallTable/CallTable";
import { getCallsRequest } from "./lib/axios";
import { getFullDate } from "./lib/utils";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setCalls } from "./redux/slices/callsSlice";
import { setInOut } from "./redux/slices/inOutSlice";
import { setNewCalls, setTotalCalls } from "./redux/slices/ratingNewCalls";
import { Result } from "./lib/types";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { duration, changerValue } = useAppSelector(
    (state) => state.sortDuration
  );
  const { inOutState } = useAppSelector((state) => state.inOut);

  React.useEffect(() => {
    const getCalls = async () => {
      try {
        const { data } = await getCallsRequest.post(
          `/getList?date_start=${getFullDate(
            duration,
            changerValue
          )}&date_end=${getFullDate(0, changerValue)}${
            inOutState !== null ? `&in_out=${inOutState}` : ""
          }`
        );

        dispatch(
          setNewCalls(
            data.results.filter(
              (call: Result) => call.results[0]?.type === "is_new"
            ).length
          )
        );
        dispatch(setTotalCalls(data.results.length));
        dispatch(setCalls(data));
      } catch (err) {
        console.log(err);
      }
    };
    getCalls();
  }, [setInOut, duration, changerValue, inOutState]);

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
