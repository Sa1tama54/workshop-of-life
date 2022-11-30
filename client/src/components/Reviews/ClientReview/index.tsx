import Image from 'next/image';
import styles from './ClientReview.module.scss';
import userLogo from 'assets/userLogo.svg';
import Rating from 'components/ui/Rating';
import PicsReview from '../PicsReview';
import Paginations from 'components/ui/Pagination';
import Sort from 'components/ui/Sort';
import { SortItem } from 'redux/filter/interfaces';

interface IReviews {
  _id: string;
  fullName: string;
  rating: number;
  images?: string[];
  text: string;
  createdAt: string;
}

const sortList: SortItem[] = [
  { name: 'Популярные', sortProperty: '' },
  { name: 'Новые', sortProperty: '' },
];

const reviews: IReviews[] = [
  {
    _id: '1',
    fullName: 'Gojo',
    rating: 4,
    text: 'Замысел эпопеи формировался задолго до начала работы над тем текстом, который известен под названием «Война и мир». В наброске предисловия к «Войне и миру» Толстой писал, что в 1856 г. начал писать повесть, «герой которой должен был быть декабрист, возвращающийся с семейством в Россию. Невольно от настоящего я перешёл к 1825 год. Но и в 1825 году герой мой. Кайл был героем. Он хотел спасти Харран. Но иногда даже величайшие герои оступаются и больше не встают...',
    createdAt: '2022-10-23T08:34:17.698+00:00',
  },
  {
    _id: '2',
    fullName: 'Liquidator',
    rating: 3,
    text: 'Замысел эпопеи формировался задолго до начала работы над тем текстом, который известен под названием «Война и мир». В наброске предисловия к «Войне и миру» Толстой писал, что в 1856 г. начал писать повесть, «герой которой должен был быть декабрист, возвращающийся с семейством в Россию. Невольно от настоящего я перешёл к 1825 год. Но и в 1825 году герой мой. Кайл был героем. Он хотел спасти Харран. Но иногда даже величайшие герои оступаются и больше не встают...',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bradbury_building_Los_Angeles_c2005_01383u.jpg/411px-Bradbury_building_Los_Angeles_c2005_01383u.jpg',
      'https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5&w=747&hash=62DE13F648199FFBC410EB727CF7A103',
    ],
    createdAt: '2022-10-23T08:34:17.698+00:00',
  },
  {
    _id: '3',
    fullName: 'Rick Grimes',
    rating: 2,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bradbury_building_Los_Angeles_c2005_01383u.jpg/411px-Bradbury_building_Los_Angeles_c2005_01383u.jpg',
      'https://www.colliers.com/-/media/images/colliers/asia/regional-image-library/1536x1040-hero-researchnews/generic1536x1040pxkl.ashx?bid=0a1129f133ff4180be8f1e1ccb78c8f5&w=747&hash=62DE13F648199FFBC410EB727CF7A103',
    ],
    text: "I'm looking for my family",
    createdAt: '2022-10-23T08:34:17.698+00:00',
  },
];

const ClintReview = () => {
  return (
    <>
      <div className={styles.sortUI}>
        <Sort sortList={sortList} />
      </div>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <div className={styles.review} key={review._id}>
            <div className={styles.reviewer}>
              <div className={styles.reviewerLogo}>
                <Image src={userLogo} alt="user logo" />
              </div>
              <div className={styles.reviewerData}>
                <p>
                  {review.fullName}
                  <br />
                  оставил отзыв {review.createdAt.slice(0, 10).split('-').reverse().join('.')}
                </p>
                <Rating value={review.rating} />
              </div>
            </div>
            <div className={styles.content}>
              {review.fullName !== 'Gojo' && <PicsReview />}
              <p className={`${review.images?.length ? styles.textNPics : styles.text}`}>
                {review.text.length > 359 ? review.text.slice(0, 359) + '...' : review.text}
                {false && <span>{review.text.slice(359)}</span>}
              </p>
              {review.text.length > 359 && (
                <p className={styles.readMore}>{true && <span>Читать подробнее</span>}</p>
              )}
            </div>
          </div>
        ))}
        <Paginations currentPage={1} productsCount={reviews.length} />
      </div>
    </>
  );
};

export default ClintReview;
