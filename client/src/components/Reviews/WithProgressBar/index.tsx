import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './WithProgressBar.module.scss';
import StarSvg from 'assets/star.svg';
import Image from 'next/image';

const WithProgressBar: React.FC = () => {
  return (
    <div className={styles.revsProgBar}>
      <p>Общие оценки</p>
      <ul className={styles.listBar}>
        <li className={styles.itemBar}>
          <p>5</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <LinearProgress
            value={90}
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
          <span>90</span>
        </li>
        <li className={styles.itemBar}>
          <p>4</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <LinearProgress
            value={70}
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
          <span>70</span>
        </li>
        <li className={styles.itemBar}>
          <p>3</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <LinearProgress
            value={50}
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
          <span>50</span>
        </li>
        <li className={styles.itemBar}>
          <p>2</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <LinearProgress
            value={20}
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
          <span>20</span>
        </li>
        <li className={styles.itemBar}>
          <p>1</p>
          <div className={styles.starSvg}>
            <Image src={StarSvg} alt="star" />
          </div>
          <LinearProgress
            value={10}
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
          <span>10</span>
        </li>
      </ul>
    </div>
  );
};

export default WithProgressBar;
