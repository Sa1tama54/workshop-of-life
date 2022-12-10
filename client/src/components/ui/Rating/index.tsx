import React from 'react';
import RatingStar from '@mui/material/Rating';

interface RatingProps {
  value: number;
}

const Rating = ({ value }: RatingProps) => {
  return (
    <RatingStar
      precision={0.5}
      sx={{ fontSize: '30px', color: '#AC0000' }}
      readOnly
      max={5}
      value={value}
    />
  );
};

export default Rating;
