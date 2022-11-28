import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

import AppButton from 'components/ui/Button';

import { ProductItem } from 'redux/products/interfaces';

import styles from 'components/Products/ProductCard/ProductCard.module.scss';

const ProductCard = ({ product }: { product: ProductItem }) => {
  return (
    <div className={styles.card}>
      <Image
        width={279}
        height={173}
        src={`/api${product.preview}`}
        alt="product_img"
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <Typography gutterBottom variant="h5">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <span>{product.price} ₽</span>
        <div className={styles.cardActions}>
          <AppButton>Заказать</AppButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
