import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

import FormDialog from 'components/ui/Modal';
import AppButton from 'components/ui/Button';

import { ServicesItem } from 'redux/services/types';

import styles from './ServicesCard.module.scss';

const ServicesCard = ({ service }: { service: ServicesItem }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.serviceCard}>
      <Image
        src={`/api/${service.preview}`}
        alt="service_preview"
        width={279}
        height={130}
        loading="lazy"
      />
      <div className={styles.content}>
        <Typography variant="h2">{service.title}</Typography>
        <div className={styles.button}>
          <AppButton handleOpen={handleClickOpen}>Оставить заявку</AppButton>
          <FormDialog handleClose={handleClose} visible={open} />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
