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
      className={`flex text-[#ffffff] w-[200px] h-[52px] rounded-[4px] bg-[#005ff8] items-center mx-auto justify-center cursor-pointer hover:bg-[#0024CB] duration-150 transition ease-out ${className}`}
    >
      <span className="ml-[24px] medium">{title}</span>
      <img src={iconPath} className="px-[13px] py-5" />
    </button>
  );
};

export default SidebarButton;
