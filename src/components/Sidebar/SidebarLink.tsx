import { FC } from "react";
import YellowCircleIcon from "../../assets/YellowCircleIcon.svg";

interface SidebarLinkProps {
  title: string;
  iconPath: string;
  active?: boolean;
}

const SidebarLink: FC<SidebarLinkProps> = ({ title, iconPath, active }) => {
  return (
    <div
      className={`flex items-center text-[#ffffff]/60 text-[16px] h-[52px] cursor-pointer ${
        active && "bg-[#D8E4FB]/32 border-l-[3px] border-[#002CFB] relative"
      }`}
    >
      <img src={iconPath} className="px-[13px] py-5" />
      <span className={`${active && "text-[#ffffff]"}`}>{title}</span>
      {active && (
        <img src={YellowCircleIcon} className="absolute top-[18px] right-1" />
      )}
    </div>
  );
};

export default SidebarLink;
