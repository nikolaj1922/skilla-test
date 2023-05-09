import React from "react";
import Download from "../ui/svg/Download";
import Play from "../ui/svg/Play";
import PlayerLine from "../ui/svg/PlayerLine";

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
  const [audioBuffer, setAudioBuffer] = React.useState<AudioBuffer | null>(
    null
  );
  const ctx = new AudioContext();

  console.log(audioBuffer);
  console.log(recordId);

  const playback = () => {
    const playSound = ctx.createBufferSource();
    playSound.buffer = audioBuffer;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  };

  const getRecord = async () => {
    await fetch(
      `https://api.skilla.ru/mango/getRecord?record=${recordId}&partnership_id=${partnershipId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`,
        },
      }
    )
      .then((data) => data.arrayBuffer())
      .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
      .then((decodeAudio) => setAudioBuffer(decodeAudio));

    playback();
  };

  return (
    <div className="w-[352px] h-[48px] bg-[#EAF0FA] rounded-[48px] flex items-center p-[18px]">
      <div className="mr-[15px]">{duration}</div>
      <div className="flex items-center space-x-2 mr-[18px]">
        <div onClick={() => getRecord()}>
          <Play />
        </div>
        <PlayerLine />
      </div>
      <div>
        <Download />
      </div>
    </div>
  );
};

export default RecordMenu;
