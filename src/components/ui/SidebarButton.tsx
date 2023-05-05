import React from "react";

interface SidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconPath: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  title,
  iconPath,
  className,
}) => {
  return (
    <button
      className={`flex text-[#ffffff] h-[52px] w-[200px] bg-[#005FF8] rounded-[4px]  items-center mx-auto justify-center cursor-pointer hover:bg-[#0024CB] duration-150 transition ease-out ${className}`}
    >
      <span className="ml-[24px]">{title}</span>
      <img src={iconPath} className="px-[13px] py-5" />
    </button>
  );
};

export default SidebarButton;
