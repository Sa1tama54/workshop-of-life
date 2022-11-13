import { FC } from 'react';
import Rating from '@mui/material/Rating';
import styles from './AvgScore.module.scss';

const AvgScore: FC = () => {
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
          <span>4,5 из 5 средняя оценка клиентов</span>
          <button>Добавить отзыв</button>
        </div>
      </div>
    </div>
  );
};

export default AvgScore;
