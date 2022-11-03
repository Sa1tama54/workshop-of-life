import React from 'react';
import ButtonServices from '../ui/Button';
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
];

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className={styles.wrapp}>
        {card.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles.serviceCard}>
                <div className={styles.imgContainer}>
                  <img src={item.url} alt="workplan_human" className={styles.servicesImg} />
                </div>
                <div className={styles.itemDesc}>{item.desc}</div>
                <div className={styles.button}>
                  <ButtonServices />
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
