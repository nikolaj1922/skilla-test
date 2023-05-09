import React, { AllHTMLAttributes } from "react";

interface DownloadProps extends AllHTMLAttributes<HTMLDivElement> {}

const Download: React.FC<DownloadProps> = ({ className }) => {
  return (
    <svg
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out`}
    >
      <path d="M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z" />
    </svg>
  );
};

export default Download;
