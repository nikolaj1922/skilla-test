import React from "react";
import Logo from "../../assets/logo.svg";
import SidebarLink from "./SidebarLink";
import SidebarButton from "../ui/SidebarButton";
import PlusIcon from "../../assets/PlusIcon.svg";
import InfoIcon from "../../assets/InfoIcon.svg";
import { links } from "../../lib/links";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <div className="fixed w-[240px] h-[963px] left-0 top-0 bg-[#091336]">
      <img src={Logo} className="absolute left-[5%] top-[2%]" />
      <div className="absolute w-[240px] left-0 top-[80px] flex flex-col items-center">
        {links.map((link) => (
          <SidebarLink
            key={link.id}
            title={link.title}
            iconPath={link.iconPath}
            active={link.active}
          />
        ))}
      </div>
      <div className="absolute top-[664px] left-[20px] flex flex-col gap-[32px]">
        <SidebarButton
          title="Добавить заказ"
          iconPath={PlusIcon}
          className="gap-2"
        />
        <SidebarButton
          title="Оплата"
          iconPath={InfoIcon}
          className="gap-6 pl-[35px]"
        />
      </div>
    </div>
  );
};

export default Sidebar;
