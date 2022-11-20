import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface LinearProgressProps {
  value: number;
}

const AppLinearProgress = ({ value }: LinearProgressProps) => {
  return (
    <LinearProgress
      value={value}
      variant="determinate"
      color="inherit"
      sx={{
        width: '293px',
        height: '22px',
        margin: '8px',
        color: '#AC0000',
        borderRadius: '4px',
        background: '#F3F3F3;',
      }}
    />
  );
};

export default AppLinearProgress;
