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

  const renderResult = () => {
    if (type === "calls") {
      return (
        <div className="flex flex-col w-[162px] h-[34px]">
          <span className="appbar-text--rating-block">
            Новые звонки{" "}
            <span className="text-[#00A775]">
              {newCalls} из {totalCalls} шт
            </span>
            <BorderLinearProgress variant="determinate" value={50} />
          </span>
        </div>
      );
    }
    if (type === "quality") {
      return (
        <div>
          <span className="appbar-text--rating-block">
            Качество разговоров{" "}
            <span className="text-[#FFB800]">{qualityPercent}%</span>
            <BorderLinearProgress variant="determinate" value={50} />
          </span>
        </div>
      );
    }
    if (type === "fails") {
      return (
        <div>
          <span className="appbar-text--rating-block">
            Конверсия в заказ{" "}
            <span className="text-[#EA1A4F]">{failPercent}%</span>
            <BorderLinearProgress variant="determinate" value={50} />
          </span>
        </div>
      );
    }
  };

  return <>{renderResult()}</>;
};

export default AppBarRaitingBlock;
