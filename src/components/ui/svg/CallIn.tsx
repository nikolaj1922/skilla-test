import React from "react";

interface CallInProps {
  rejected: boolean;
}

const CallIn: React.FC<CallInProps> = ({ rejected }) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rejected ? "fill-[#EA1A4F]" : "fill-[#005FF8]"}`}
    >
      <path d="M12.5217 1.17704L11.3447 0L1.66957 9.67513V4.17391H0V12.5217H8.34783V10.8522H2.84661L12.5217 1.17704Z" />
    </svg>
  );
};

export default CallIn;
