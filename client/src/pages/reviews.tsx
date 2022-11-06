import ReviewsScore from 'components/Reviews/ReviewsScore';
import styles from 'styles/pages/Review.module.scss';
import MainLayout from 'layouts/MainLayout';

const Reviews = () => {
  return (
    <MainLayout>
      <h1 className={styles.reviewTitle}>Отзывы</h1>
      <hr className={styles.hr} />
      <ReviewsScore />
    </MainLayout>
  );
};

export default Reviews;
