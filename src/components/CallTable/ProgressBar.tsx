import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

interface LinearDeterminateProps {
  progress: number;
}

const LinearDeterminate: React.FC<LinearDeterminateProps> = ({ progress }) => {
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <Box sx={{ width: 164 }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default LinearDeterminate;
