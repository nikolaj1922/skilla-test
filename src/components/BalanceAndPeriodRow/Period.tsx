import React from "react";
import { ArrowLeft, ArrowRight, Calendar } from "../ui/svg";
import DateMenu from "./DateMenu";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setChangerValue } from "../../redux/slices/sortDurationSlice";

interface PeriodProps {}

const Period: React.FC<PeriodProps> = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { title, duration, changerValue } = useAppSelector(
    (state) => state.sortDuration
  );

  return (
    <div className="flex items-center justify-center space-x-[21px] relative">
      <div onClick={() => dispatch(setChangerValue(duration))}>
        <ArrowLeft />
      </div>
      <div
        className="flex items-center space-x-2 cursor-pointer group"
        onClick={() => setOpen(true)}
      >
        <Calendar />
        <span className="text-[#005FF8]">{title}</span>
      </div>
      <div
        onClick={() => dispatch(setChangerValue(duration * -1))}
        className={`${changerValue === 0 && "pointer-events-none"}`}
      >
        <ArrowRight />
      </div>
      {open && <DateMenu setOpen={setOpen} />}
    </div>
  );
};

export default Period;
