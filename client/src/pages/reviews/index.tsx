import React from 'react';
import styles from './Reviews.module.scss';
import MainLayout from 'layouts/MainLayout';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { fetchReviews } from 'redux/reviews/asyncActions';
import { useRouter } from 'next/router';

import { AverageRating, ProgressBarReview, PicsReview, ClientReview } from 'components/Reviews';

const Reviews = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <MainLayout headingTitle="Отзывы" path={router.asPath}>
      <section className={styles.scoreBar}>
        <AverageRating />
        <ProgressBarReview />
      </section>
      <section className={styles.picsClients}>
        <div className={styles.picsTitle}>Фотографии наших клиентов</div>
        <PicsReview />
      </section>
      <div className="clientReview">
        <ClientReview />
      </div>
    </MainLayout>
  );
};

export default Reviews;
