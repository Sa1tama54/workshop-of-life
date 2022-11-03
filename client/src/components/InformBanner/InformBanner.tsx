import Image from 'next/image';
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
      {logo.map((item, index) => {
        return (
          <Image
            src={item.url}
            key={index}
            alt="workplan_human"
            width={500}
            height={500}
            priority
          />
        );
      })}
      <div className={styles.textContainer}>
        <h2>Установка бытовой техники</h2>
        <p>
          Установка и продажа кондиционеров. Ремонт чистка и продув. Гарантия на установку и продажу
          кондиционеров Без пыли аккуратно и максимально качественно
        </p>
      </div>
    </div>
  );
};

export default InformBanner;
