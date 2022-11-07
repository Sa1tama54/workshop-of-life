import ReviewsScore from 'components/Reviews/ReviewsScore';
import MainLayout from 'layouts/MainLayout';
import Heading from 'components/ui/Heading';

const Reviews = () => {
  return (
    <MainLayout hideTabs={true}>
      <Heading>Отзывы</Heading>
      <ReviewsScore />
    </MainLayout>
  );
};

export default Reviews;
