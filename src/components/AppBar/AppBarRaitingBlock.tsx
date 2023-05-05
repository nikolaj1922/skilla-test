import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

interface AppBarRaitingBlockProps {
  type: "calls" | "quality" | "fails";
  failPercent?: number;
  qualityPercent?: number;
  newCalls?: number;
  totalCalls?: number;
}

const getLinearProgressColor = (
  type: "calls" | "quality" | "fails"
): string => {
  if (type === "calls") return "#28A879";
  if (type === "quality") return "#FFD500";
  if (type === "fails") return "#EA1A4F";
  return "";
};

const AppBarRaitingBlock: React.FC<AppBarRaitingBlockProps> = ({
  type,
  newCalls,
  totalCalls,
  qualityPercent,
  failPercent,
}) => {
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 6,
    width: 156,
    borderRadius: 12,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#DEE6F5",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: getLinearProgressColor(type),
    },
  }));

  const title = () => {
    if (type === "calls") {
      return (
        <span className="appbar-raiting-block-text">
          Новые звонки{" "}
          <span className="text-[#00A775]">
            {newCalls} из {totalCalls}
          </span>
        </span>
      );
    }
    if (type === "quality") {
      return (
        <span className="appbar-raiting-block-text">
          Качество разговоров{" "}
          <span className="text-[#FFB800]">{qualityPercent}%</span>
        </span>
      );
    }
    if (type === "fails") {
      return (
        <span className="appbar-raiting-block-text">
          Конверсия в отказ{" "}
          <span className="text-[#EA1A4F]">{failPercent}%</span>
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col space-y-[7px]">
      {title()}
      <BorderLinearProgress variant="determinate" value={50} />
    </div>
  );
};

export default AppBarRaitingBlock;
