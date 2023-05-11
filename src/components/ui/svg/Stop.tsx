import React, { AllHTMLAttributes } from "react";

interface StopProps extends AllHTMLAttributes<HTMLDivElement> {}

const Stop: React.FC<StopProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="#fff"
      className={`w-6 h-6 text-[#002CFB] cursor-pointer ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default Stop;
