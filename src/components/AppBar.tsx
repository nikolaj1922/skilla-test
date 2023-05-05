import React from "react";
import AppBarRaitingBlock from "./AppBarRaitingBlock";
import SearchIcon from "../assets/SearchIcon.svg";
import ArrowDownIcon from "../assets/ArrowDown.svg";
import Avatar from "@mui/material/Avatar";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
  return (
    <div className="h-16 w-full shadow-md fixed top-0 ml-[240px] text-[#899CB1] font-[15px] z-50">
      <div className="px-[120px] flex items-center h-full">
        <div className=" mr-[86px]">Среда, 13 окт</div>
        <div className="flex gap-[56px] mr-[197px]">
          <AppBarRaitingBlock type="calls" newCalls={20} totalCalls={30} />
          <AppBarRaitingBlock type="quality" qualityPercent={40} />
          <AppBarRaitingBlock type="fails" failPercent={67} />
        </div>
        <img src={SearchIcon} className="mr-16" />
        <div className="flex items-center justify-center space-x-[10px] mr-[47px]">
          <span>ИП Сидорова Александра Михайловна</span>{" "}
          <img src={ArrowDownIcon} />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default AppBar;
