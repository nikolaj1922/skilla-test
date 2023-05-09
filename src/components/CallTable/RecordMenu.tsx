import React from "react";
import { Download, Play, Stop } from "../ui/svg";
import { CircularProgress } from "@mui/material";
import { getCallDuration } from "../../lib/utils";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

interface RecordMenuProps {
  duration: string;
  recordId: string;
  partnershipId: string;
}

const RecordMenu: React.FC<RecordMenuProps> = ({
  duration,
  recordId,
  partnershipId,
}) => {
  const audio = React.useMemo(() => new Audio(), [recordId, partnershipId]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recordDuration, setRecordDuration] = React.useState<number | null>(
    null
  );
  const [recordCurrentTime, setRecordCurrentTime] = React.useState<number>(0);
  const [isPlaying, setInPlaying] = React.useState<boolean>(false);
  const [interval, setIntervalState] = React.useState<NodeJS.Timer | null>(
    null
  );

  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 4,
    width: 164,
    borderRadius: 50,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#DEE6F5",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#002CFB",
    },
  }));

  React.useEffect(() => {
    audio.addEventListener("ended", () => {
      clearInterval(interval as NodeJS.Timer);
      setRecordCurrentTime(0);
      setInPlaying(false);
    });
  }, [audio.src, interval]);

  const fetchRecord = () => {
    setIsLoading(true);
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`,
      },
    };
    fetch(
      `https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnershipId}`,
      requestOptions
    )
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        audio.src = url;
        audio.addEventListener("loadeddata", () => {
          setRecordDuration(audio.duration);
        });
        audio.addEventListener("ended", () => URL.revokeObjectURL(url));
        playRecord();
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  function playRecord() {
    audio.play();
    setInPlaying(true);
    setIntervalState(
      setInterval(() => {
        setRecordCurrentTime((prevState) => prevState! + 1);
      }, 1000)
    );
  }

  const stopRecord = () => {
    audio.pause();
    clearInterval(interval as NodeJS.Timer);
    setInPlaying(false);
  };

  return (
    <div className="w-[352px] h-[48px] bg-[#EAF0FA] rounded-[48px] flex items-center p-[18px]">
      <div className="mr-[15px] w-[40px]">
        {getCallDuration(Math.floor(recordDuration! - recordCurrentTime)) ||
          duration}
      </div>
      <div className="flex items-center space-x-2 mr-[20px]">
        <div className="w-[24px] relative">
          {isLoading ? (
            <CircularProgress size={15} className="absolute left-1 -top-2" />
          ) : !isPlaying ? (
            <div onClick={audio.src ? playRecord : fetchRecord}>
              <Play />
            </div>
          ) : (
            <div onClick={stopRecord}>
              <Stop />
            </div>
          )}
        </div>
        <BorderLinearProgress
          variant="determinate"
          value={(recordCurrentTime! / recordDuration!) * 100 || 0}
        />
      </div>
      <div>
        <Download />
      </div>
    </div>
  );
};

export default RecordMenu;
