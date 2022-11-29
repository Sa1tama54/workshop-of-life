import MainLayout from 'layouts/MainLayout';
import styles from './Reviews.module.scss';
import { AverageRating, ProgressBarReview, PicsReview, ClientReview } from 'components/Reviews';
import { useRouter } from 'next/router';

const Reviews = () => {
  const router = useRouter();
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
