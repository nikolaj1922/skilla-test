import React, { AllHTMLAttributes } from "react";
import { useAppSelector } from "../../../redux/hooks";

interface ArrowRightProps extends AllHTMLAttributes<HTMLDivElement> {}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => {
  const { changerValue } = useAppSelector((state) => state.sortDuration);

  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-[#ADBFDF] hover:fill-[#002CFB] group-hover:fill-[#002CFB] cursor-pointer transition duration-150 ease-out ${
        changerValue === 0 && "hover:fill-[#ADBFDF]"
      }`}
    >
      <path d="M0.589844 8.825L4.40651 5L0.589844 1.175L1.76484 0L6.76484 5L1.76484 10L0.589844 8.825Z" />
    </svg>
  );
};

export default ArrowRight;
