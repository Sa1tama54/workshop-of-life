import React from 'react';
import Rating from '@mui/material/Rating';
import styles from './AverageRating.module.scss';

const AverageRating = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <div className={styles.generalRevs}>
          <p className={styles.countRevs}>
            123 <span>Оценки клиентов</span>
          </p>
          <Rating
            sx={{ marginBottom: '10px', color: '#ac0000', padding: 0 }}
            size="large"
            name="read-only"
            value={5}
            readOnly
          />
          <span className={styles.avgScore}>4,5 из 5 средняя оценка клиентов</span>
          <button>Добавить отзыв</button>
        </div>
      </div>
    </div>
  );
};

export default AverageRating;
