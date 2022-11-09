import ReviewsScore from 'components/Reviews/ReviewsScore';
import MainLayout from 'layouts/MainLayout';
import Heading from 'components/ui/Heading';
import ReviewsWithProgressBar from 'components/Reviews/ReviewsProgressBar';

const Reviews = () => {
  return (
    <MainLayout hideTabs={true}>
      <Heading>Отзывы</Heading>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ReviewsScore />
        <ReviewsWithProgressBar />
      </div>
    </MainLayout>
  );
};

export default Reviews;
