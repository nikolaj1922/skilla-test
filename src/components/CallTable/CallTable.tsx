import React from "react";

interface CallTableProps {}

const CallTable: React.FC<CallTableProps> = ({}) => {
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
        <tr className="h-[65px]">
          <td className="table-header w-[40px]"></td>
          <td className="table-header w-[53px]">Тип</td>
          <td className="table-header w-[89px]">Время</td>
          <td className="table-header w-[128px]">Сотрудник</td>
          <td className="table-header w-[326px]">Звонок</td>
          <td className="table-header w-[214px]">Источник</td>
          <td className="table-header w-[461px]">Оценка</td>
          <td className="table-header w-[129px]">Длительность</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CallTable;
