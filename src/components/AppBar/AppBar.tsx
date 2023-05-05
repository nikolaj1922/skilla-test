import React from "react";
import AppBarRaitingBlock from "./AppBarRaitingBlock";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "@mui/material/Avatar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
  return (
    <div className="h-16 w-full shadow-md fixed top-0 text-[#899CB1] font-[15px] z-50 bg-[#fff]">
      <div className="px-[120px] flex items-center h-full">
        <div className=" mr-[86px]">Среда, 13 окт</div>
        <div className="flex gap-[56px] mr-[197px]">
          <AppBarRaitingBlock type="calls" newCalls={20} totalCalls={30} />
          <AppBarRaitingBlock type="quality" qualityPercent={40} />
          <AppBarRaitingBlock type="fails" failPercent={67} />
        </div>
        <MagnifyingGlassIcon className="mr-16 icon h-5 w-5" />
        <div className="flex items-center justify-center space-x-[10px] mr-[47px] cursor-pointer group">
          <span>ИП Сидорова Александра Михайловна</span>
          <ChevronDownIcon className="icon h-5 w-5 group-hover:text-[#002CFB]" />
        </div>
        <div className="flex items-center justify-center space-x-[10px] group cursor-pointer">
          <Avatar />
          <ChevronDownIcon className="icon h-5 w-5 group-hover:text-[#002CFB]" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
