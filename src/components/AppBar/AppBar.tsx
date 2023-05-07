import React from "react";
import AppBarRaitingBlock from "./AppBarRaitingBlock";
import Avatar from "@mui/material/Avatar";
import { Search, ArrowDown } from "../ui/svg";
import styles from "./AppBar.module.css";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
  return (
    <div className="absolute w-[1680px] h-[64px] left-[240px] top-0 bg-[#fff] shadow-sm">
      <div className="absolute left-[120px] text-[#899cb1] h-full flex items-center">
        <div className="leading-[148%] basis-[90px] text-[15px] mr-[86px]">
          Среда, 13 окт
        </div>
        <div className="flex space-x-[56px] items-center justify-center basis-[432px] mr-[199px]">
          <AppBarRaitingBlock type="calls" newCalls={20} totalCalls={30} />
          <AppBarRaitingBlock type="quality" qualityPercent={40} />
          <AppBarRaitingBlock type="fails" failPercent={67} />
        </div>
        <Search className="basis-[16px] mr-[64px]" />
        <div className="group flex items-center space-x-[10px] cursor-pointer basis-[284px] mr-[47px]">
          <span className="text-[15px] whitespace-nowrap group-hover:text-[#002CFB] transition duration-150 ease-out">
            ИП Сидорова Александра Михайловна
          </span>
          <ArrowDown />
        </div>
        <div className="group flex items-center space-x-[10px] cursor-pointer">
          <Avatar />
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
