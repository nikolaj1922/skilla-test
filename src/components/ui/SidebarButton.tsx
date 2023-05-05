import { FC } from "react";

interface SidebarButtonProps {
  title: string;
  iconPath: string;
}

const SidebarButton: FC<SidebarButtonProps> = ({ title, iconPath }) => {
  return (
    <div className="flex text-[#ffffff] h-[52px] w-[200px] bg-[#005FF8] rounded-[4px]  items-center mx-auto justify-center cursor-pointer ">
      <span className="ml-[24px]">{title}</span>
      <img src={iconPath} className="px-[13px] py-5" />
    </div>
  );
};

export default SidebarButton;
