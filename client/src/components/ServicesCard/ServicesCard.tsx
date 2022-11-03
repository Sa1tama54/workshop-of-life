import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import AppButton from '../ui/Button';
import styles from './ServicesCard.module.scss';

const card: { desc: string; url: string }[] = [
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
];

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className={styles.wrapp}>
        {card.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles.serviceCard}>
                <Image src={item.url} alt="workplan_human" width={279} height={173} />
                <div className={styles.content}>
                  <Typography variant="h2">{item.desc}</Typography>
                  <div className={styles.button}>
                    <AppButton />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ServicesCard;
