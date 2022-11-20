import React from 'react';
import Image from 'next/image';
import StarSvg from 'assets/star.svg';
import styles from './ProgressBarReview.module.scss';
import AppLinearProgress from 'components/ui/AppLinearProgress';

const ProgressBarReview = () => {
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
          <span>90</span>
        </li>
        <li className={styles.itemBar}>
          <p>4</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={70} />
          <span>70</span>
        </li>
        <li className={styles.itemBar}>
          <p>3</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={50} />
          <span>50</span>
        </li>
        <li className={styles.itemBar}>
          <p>2</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={20} />
          <span>20</span>
        </li>
        <li className={styles.itemBar}>
          <p>1</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <AppLinearProgress value={10} />
          <span>10</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBarReview;
