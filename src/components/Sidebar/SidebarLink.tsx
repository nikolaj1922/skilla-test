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
      className={`w-full h-[52px] bg-[#091336] ${
        active && "!bg-[#D8E4FB]/32 border-l-[3px] border-[#002CFB]"
      } relative cursor-pointer`}
    >
      <img src={iconPath} className="absolute left-[14px] top-[17px]" />
      <span
        className={`absolute left-[48px] top-[14px] medium-text text-[#fff]/60 ${
          active && "!text-[#fff] left-[45px]"
        } `}
      >
        {title}
      </span>
      {active && (
        <img src={YellowCircleIcon} className="absolute top-[18px] right-1" />
      )}
    </div>
  );
};

export default SidebarLink;
