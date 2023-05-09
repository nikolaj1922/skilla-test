import React, { AllHTMLAttributes } from "react";

interface CloseProps extends AllHTMLAttributes<HTMLDivElement> {}

const Close: React.FC<CloseProps> = ({ className }) => {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] group-hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out`}
    >
      <path d="M8.875 1.00625L7.99375 0.125L4.5 3.61875L1.00625 0.125L0.125 1.00625L3.61875 4.5L0.125 7.99375L1.00625 8.875L4.5 5.38125L7.99375 8.875L8.875 7.99375L5.38125 4.5L8.875 1.00625Z" />
    </svg>
  );
};

export default Close;
