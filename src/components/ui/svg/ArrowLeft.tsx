import React, { AllHTMLAttributes } from "react";

interface ArrowLeftProps extends AllHTMLAttributes<HTMLDivElement> {}

const ArrowLeft: React.FC<ArrowLeftProps> = ({className}) => {
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] group-hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out`}
    >
      <path
        d="M6.175 8.825L2.35833 5L6.175 1.175L5 0L0 5L5 10L6.175 8.825Z"
      />
    </svg>
  );
};

export default ArrowLeft;
