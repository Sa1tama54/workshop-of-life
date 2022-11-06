import { FC } from 'react';
import { Rating } from '@mui/material';
import styles from './ReviewsScore.module.scss';

const ReviewsScore: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <div className={styles.generalRevs}>
          <p>123 Оценки клиентов</p>
          <Rating
            sx={{ marginBottom: '10px', color: '#ac0000', padding: 0 }}
            size="large"
            name="read-only"
            value={5}
            readOnly
          />
          <span>4,5 из 5 средняя оценка клиентов</span>
          <button>Добавить отзыв</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsScore;
