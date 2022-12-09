import React from 'react';
import styles from './ClientReview.module.scss';

import Paginations from 'components/ui/Pagination';
import ClientReview from './ClientReview';
import Sort from 'components/ui/Sort';

import { SortItem } from 'redux/filter/interfaces';
import { reviewSelector } from 'redux/reviews/selector';
import { useAppSelector } from 'common/hooks/useAppSelector';

const sortList: SortItem[] = [
  { name: 'По рейтингу', sortProperty: 'a' },
  { name: 'Сначала Новые', sortProperty: 'o' },
  { name: 'Сначала Старые', sortProperty: 'k' },
];

const ClintReview = () => {
  const reviews = useAppSelector(reviewSelector).reviews;

  return (
    <>
      <div className={styles.sortUI}>
        <Sort sortList={sortList} />
      </div>
      <div className={styles.reviews}>
        {reviews?.map((review) => (
          <ClientReview key={review._id} {...review} />
        ))}
        <Paginations currentPage={1} productsCount={reviews.length} />
      </div>
    </>
  );
};

export default ClintReview;
