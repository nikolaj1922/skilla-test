import React from "react";

interface RecognizeButtonProps {}

const RecognizeButton: React.FC<RecognizeButtonProps> = ({}) => {
  return (
    <button className="w-[122px] h-[40px] bg-inherit border-[1px] text-[#002CFB]  border-[#002CFB] rounded-[4px] cursor-pointer hover:bg-[#002CFB] hover:text-[#fff] transition duration-150 ease-out">
      Распознать
    </button>
  );
};

export default RecognizeButton;
