import { Typography } from '@mui/material';
import FormDialog from 'components/ui/Modal';
import Image from 'next/image';
import React from 'react';
import styles from './ServicesCard.module.scss';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { fetchServices } from 'features/services/asyncActions';
import { useAppDispatch } from 'common/hooks/useAppDispatch';

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
  const dispatch = useAppDispatch();

  const services = useAppSelector((state) => state.service.items);
  React.useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      <div className={styles.wrapp}>
        {services.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={styles.serviceCard}>
                <Image src={item.review} alt="workplan_human" width={279} height={173} />
                <div className={styles.content}>
                  <Typography variant="h2">{item.title}</Typography>
                  <div className={styles.button}>
                    <FormDialog />
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
