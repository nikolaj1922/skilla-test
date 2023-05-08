import React from "react";
import { Calls } from "../../lib/types";
import { getCallTime, getCallDuration, getRandomGrade } from "../../lib/utils";
import { Avatar } from "@mui/material";
import RecognizeButton from "../ui/RecognizeButton";
import { BadGrade, GoodGrade, PerfectGrade, CallIn, CallOut } from "../ui/svg";

interface CallTableProps {
  calls: Calls | null;
}

const CallTable: React.FC<CallTableProps> = ({ calls }) => {
  console.log(calls);

  const getGrade = () => {
    const grade = getRandomGrade();
    if (grade === 0) return <RecognizeButton />;
    if (grade === 1) return <BadGrade />;
    if (grade === 2) return <GoodGrade />;
    if (grade === 3) return <PerfectGrade />;
  };

  return (
    <table className="bg-[#fff] rounded-[8px] text-sm">
      <thead>
        <tr className="h-[65px] border-b border-[#EAF0FA]">
          <th className="table-header w-[40px] border-b border-[#fff]"></th>
          <th className="table-header w-[53px] text-start">Тип</th>
          <th className="table-header w-[89px] text-start">Время</th>
          <th className="table-header w-[128px] text-start">Сотрудник</th>
          <th className="table-header w-[326px] text-start">Звонок</th>
          <th className="table-header w-[214px] text-start">Источник</th>
          <th className="table-header w-[461px] text-start">Оценка</th>
          <th className="table-header w-[129px] text-start">Длительность</th>
        </tr>
      </thead>
      <tbody>
        {calls?.results.map((call) => (
          <tr className="h-[65px] border-b border-[#EAF0FA]" key={call.id}>
            <td className="table-header w-[40px] border-b border-[#fff]"></td>
            <td className="table-header w-[53px] pl-2">
              {call.in_out === 1 ? (
                <CallIn
                  rejected={call.status === "Не дозвонился" ? true : false}
                />
              ) : (
                <CallOut
                  rejected={call.status === "Не дозвонился" ? true : false}
                />
              )}
            </td>
            <td className="table-header w-[89px] text-[#122945] text-[15px]">
              {getCallTime(call.date)}
            </td>
            <td className="table-header w-[128px]">
              <Avatar
                src={call.person_avatar}
                alt="person logo"
                sx={{ width: 32, height: 32 }}
              />
            </td>
            <td className="table-header w-[326px] text-[15px] text-[#122945]">
              {call.in_out === 1 ? call.from_number : call.to_number}
            </td>
            <td className="table-header w-[214px]">{call.source}</td>
            <td className="table-header w-[461px] text-[#EA1A4F]">
              {call.status === "Дозвонился" &&
              call.errors[0] === "Скрипт не использован"
                ? "Скрипт не использован"
                : call.status === "Дозвонился"
                ? getGrade()
                : null}
            </td>
            <td className="table-header w-[129px] text-right text-[#122945] pr-[40px]">
              {call.time > 0 && getCallDuration(call.time)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CallTable;
