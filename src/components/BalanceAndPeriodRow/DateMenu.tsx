import React from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changeDuration,
  setChangerValue,
  setCustomEndValue,
  setCustomStartValue,
} from "../../redux/slices/sortDurationSlice";
import { Calendar } from "../ui/svg";
import { getCallsRequest } from "../../lib/axios";
import { setCalls } from "../../redux/slices/callsSlice";

interface DateMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateMenu: React.FC<DateMenuProps> = ({ setOpen }) => {
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { duration, customEndValue, customStartValue } = useAppSelector(
    (state) => state.sortDuration
  );
  const { inOutState } = useAppSelector((state) => state.inOut);
  useOnClickOutside(menuRef, () => setOpen(false));

  const formatCustomValue = (value: string) =>
    value
      .split(".")
      .reverse()
      .map((item, index) => (index === 0 ? `20${item}` : item))
      .join("-");

  const getCalls = async () => {
    try {
      const { data } = await getCallsRequest.post(
        `/getList?date_start=${formatCustomValue(
          customStartValue
        )}&date_end=${formatCustomValue(customEndValue)}${
          inOutState !== null ? `&in_out=${inOutState}` : ""
        }`
      );
      dispatch(setCalls(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      ref={menuRef}
      className="w-[204px] h-[239px] bg-[#fff] z-10 absolute top-7 right-0 rounded-[4px] border-[1px] border-[#EAF0FA] shadow-[0px_0px_26px_rgba(233,237,243,0.8)] flex flex-col"
    >
      <div
        className={`date-menu--item ${duration === 3 && "text-[#002CFB]"}`}
        onClick={() => {
          dispatch(changeDuration(3));
          dispatch(setChangerValue(0));
          setOpen(false);
        }}
      >
        3 дня
      </div>
      <div
        className={`date-menu--item ${duration === 7 && "text-[#002CFB]"}`}
        onClick={() => {
          dispatch(changeDuration(7));
          dispatch(setChangerValue(0));
          setOpen(false);
        }}
      >
        Неделя
      </div>
      <div
        className={`date-menu--item ${duration === 30 && "text-[#002CFB]"}`}
        onClick={() => {
          dispatch(changeDuration(30));
          dispatch(setChangerValue(0));
          setOpen(false);
        }}
      >
        Месяц
      </div>
      <div
        className={`date-menu--item ${duration === 365 && "text-[#002CFB]"}`}
        onClick={() => {
          dispatch(changeDuration(365));
          dispatch(setChangerValue(0));
          setOpen(false);
        }}
      >
        Год
      </div>
      <div className="date-menu--item hover:bg-[#fff] cursor-default">
        <span>Указать даты</span>
        <div className="flex space-x-[25px]">
          <div className="flex space-x-0.5">
            <input
              className="text-[14px] w-[56px] h-[28px] placeholder:text-[#ADBFDF] placeholder:text-[18px] outline-none"
              placeholder="__.__.__"
              onChange={(e) => dispatch(setCustomStartValue(e.target.value))}
              maxLength={8}
            />
            <span className="text-[#ADBFDF]">-</span>
            <input
              className="text-[14px] w-[56px] h-[28px] placeholder:text-[#ADBFDF] placeholder:text-[18px] outline-none"
              placeholder="__.__.__"
              onChange={(e) => dispatch(setCustomEndValue(e.target.value))}
              maxLength={8}
            />
          </div>
          <div
            onClick={() => {
              customEndValue.length === 8 &&
                customStartValue.length === 8 &&
                getCalls();
            }}
          >
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateMenu;
