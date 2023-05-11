import React, { AllHTMLAttributes } from "react";

interface ArrowDownProps extends AllHTMLAttributes<HTMLDivElement> {}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] group-hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out`}
    >
      <path
        opacity="0.8"
        d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z"
      />
    </svg>
  );
};

export default ArrowDown;
