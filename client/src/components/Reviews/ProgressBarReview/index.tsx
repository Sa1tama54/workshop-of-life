import React from 'react';
import Image from 'next/image';
import StarSvg from 'assets/star.svg';
import styles from './ProgressBarReview.module.scss';
import AppLinearProgress from 'components/ui/AppLinearProgress';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { reviewSelector } from 'redux/reviews/selector';

const ProgressBarReview = () => {
  const reviews = useAppSelector(reviewSelector).reviews;

  const countOfRate = reviews.reduce<Record<number, number>>(
    (acc, review) => (acc[review.rating] ? acc[review.rating]++ : (acc[review.rating] = 1), acc),
    {}
  );

  return (
    <div className={styles.revsProgBar}>
      <p>Общие оценки</p>
      <ul className={styles.listBar}>
        <li className={styles.itemBar}>
          <p>5</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={90} />
          <span>{countOfRate['5'] ? countOfRate['5'] : 0}</span>
        </li>
        <li className={styles.itemBar}>
          <p>4</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={70} />
          <span>{countOfRate['4'] ? countOfRate['4'] : 0}</span>
        </li>
        <li className={styles.itemBar}>
          <p>3</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={50} />
          <span>{countOfRate['3'] ? countOfRate['3'] : 0}</span>
        </li>
        <li className={styles.itemBar}>
          <p>2</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={20} />
          <span>{countOfRate['2'] ? countOfRate['2'] : 0}</span>
        </li>
        <li className={styles.itemBar}>
          <p>1</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={10} />
          <span>{countOfRate['1'] ? countOfRate['1'] : 0}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBarReview;
