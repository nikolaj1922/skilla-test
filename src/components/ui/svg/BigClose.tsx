import React, { AllHTMLAttributes } from "react";

interface CloseProps extends AllHTMLAttributes<HTMLDivElement> {}

const BigClose: React.FC<CloseProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] group-hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out`}
    >
      <g clip-path="url(#clip0_60_3560)">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
      </g>
      <defs>
        <clipPath id="clip0_60_3560">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BigClose;
