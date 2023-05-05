import React from "react";
import Logo from "../../assets/logo.svg";
import SidebarLink from "./SidebarLink";
import SidebarButton from "../ui/SidebarButton";
import PlusIcon from "../../assets/PlusIcon.svg";
import InfoIcon from "../../assets/InfoIcon.svg";
import { links } from "./links";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="w-[240px] bg-[#091336] h-[936px]">
      <img src={Logo} className="mt-5 ml-3 mb-8 cursor-pointer" />
      <div className="mb-16">
        {links.map((link) => (
          <SidebarLink
            key={link.id}
            title={link.title}
            iconPath={link.iconPath}
            active={link.active}
          />
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <SidebarButton title="Добавить заказ" iconPath={PlusIcon} />
        <SidebarButton title="Оплатить" iconPath={InfoIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
