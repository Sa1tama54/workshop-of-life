import React, { memo } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './ReviewsProgressBar.module.scss';
import { Star } from '@mui/icons-material';

const ReviewsWithProgress: React.FC = () => {
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          listStyle: 'none',
        }}
      >
        {[5, 4, 3, 2, 1].map((el, i) => (
          <li key={i} style={{ display: 'inherit', alignItems: 'center' }}>
            {el}
            <span className={styles.star}>
              <Star sx={{ color: 'red' }} />
            </span>
            <LinearProgress value={50} variant="determinate" sx={{ width: '600px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReviewsWithProgress);
