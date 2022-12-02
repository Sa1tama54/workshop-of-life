import React from 'react';
import Rating from '@mui/material/Rating';

interface RatingProps {
  value: number;
}

const Rat = ({ value }: RatingProps) => {
  return <Rating sx={{ fontSize: '30px', color: '#AC0000' }} readOnly value={value} />;
};

export default Rat;
