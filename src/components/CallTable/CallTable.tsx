import React from "react";
import { getCallTime, getCallDuration } from "../../lib/utils";
import { Avatar } from "@mui/material";
import { CallIn, CallOut } from "../ui/svg";
import { useAppSelector } from "../../redux/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import RecordMenu from "./RecordMenu";

interface CallTableProps {}

const CallTable: React.FC<CallTableProps> = ({}) => {
  const { calls } = useAppSelector((state) => state.calls);
  const { searchValue } = useAppSelector((state) => state.searchNumber);

  if (!calls) {
    return (
      <div className="flex items-center justify-center space-x-[10px]">
        <CircularProgress size={15} />
        <span className="text-sm text-[#899CB1]">Загружаем</span>{" "}
      </div>
    );
  }

  return (
    <table className="bg-[#fff] rounded-[8px] text-sm mb-20 group/table">
      <thead>
        <tr className="h-[60px] border-b border-[#EAF0FA] ">
          <th className="table-header w-[40px] border-b border-[#fff] relative">
            <input
              type="checkbox"
              className={`hidden group-hover/table:inline-block checked:inline-block w-[17px] h-[17px] absolute top-[24px] left-[12px] text-[#002CFB] hover:text-[#0024CB] border-2 rounded-sm focus:ring-0 border-[#ADBFDF] cursor-pointer hover:border-[#002CFB] transition duration-150 ease-out`}
            />
          </th>
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
        {calls.results
          .filter((call) =>
            searchValue && call.in_out === 1
              ? call.from_number.startsWith(searchValue)
              : call.to_number.startsWith(searchValue)
          )
          .map((call) => (
            <tr
              className="h-[65px] border-b border-[#EAF0FA] hover:bg-[#D4DFF3]/20 group"
              key={call.id}
            >
              <td className="table-header w-[40px] border-b border-[#fff] relative">
                <input
                  type="checkbox"
                  className="hidden group-hover:inline-block checked:inline-block w-[17px] h-[17px] absolute top-[24px] left-[12px] text-[#002CFB] hover:text-[#0024CB] border-2 rounded-sm focus:ring-0 border-[#ADBFDF] cursor-pointer hover:border-[#002CFB] transition duration-150 ease-out"
                />
              </td>
              <td className="table-header w-[53px] pl-1.5 pb-1.5">
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
              <td className="table-header w-[89px] text-[#122945] text-[15px] pl-1 pb-1">
                {getCallTime(call.date)}
              </td>
              <td className="table-header w-[128px]">
                <Avatar
                  src={call.person_avatar}
                  alt="person logo"
                  sx={{ width: 32, height: 32 }}
                />
              </td>
              <td className="table-header w-[326px] text-[15px] text-[#122945] pb-1 pl-1">
                {call.in_out === 1 ? call.from_number : call.to_number}
              </td>
              <td className="table-header w-[214px]">{call.source}</td>
              <td className="table-header w-[461px] text-[#EA1A4F]">
                {call.status === "Дозвонился" &&
                  call.errors[0] === "Скрипт не использован" &&
                  "Скрипт не использован"}
              </td>
              <td className="table-header w-[129px] text-right text-[#122945] pr-[40px] relative">
                <div className={`${call.record && "group-hover:hidden"} pb-1`}>
                  {call.time > 0 && getCallDuration(call.time)}
                </div>
                <div
                  className={`hidden ${
                    call.record && "group-hover:inline-block"
                  } absolute right-[40px] top-[8px]`}
                >
                  <RecordMenu
                    duration={getCallDuration(call.time)}
                    recordId={call.record}
                    partnershipId={call.partnership_id}
                  />
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CallTable;
