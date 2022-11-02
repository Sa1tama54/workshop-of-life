import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import styles from './ProductCard.module.scss';

const StyledCardActionArea = styled(CardActionArea)({
  '.MuiCardActionArea-focusHighlight': {
    background: 'transparent',
  },
});

const ProductCard = () => {
  return (
    <Card elevation={0} className={styles.card}>
      <StyledCardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG"
          alt="product"
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5">
            Краткое описание
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Дополнение к описанию, для раскрытие деталей
          </Typography>
          <span>150 ₽</span>
        </CardContent>
      </StyledCardActionArea>
      <CardActions className={styles.cardActions}>
        <Button size="small" color="primary" variant="contained">
          Заказать
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
