import React from 'react';
import styles from './InformBanner.module.scss';

const InformBanner: React.FC = () => {
  const logo: { url: string }[] = [
    {
      url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        {logo.map((item, index) => {
          return <img src={item.url} key={index} alt="workplan_human" className={styles.img} />;
        })}
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.servicesName}>Установка бытовой техники</h2>
        <p className={styles.servicesDescription}>
          {' '}
          Установка и продажа кондиционеров. Ремонт чистка и продув. Гарантия на установку и продажу
          кондиционеров Без пыли аккуратно и максимально качественно
        </p>
      </div>
    </div>
  );
};

export default InformBanner;
