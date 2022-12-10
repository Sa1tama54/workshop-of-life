import Image from 'next/image';
import React from 'react';
import styles from './ClientReview.module.scss';
import userLogo from 'assets/userLogo.svg';
import Rating from 'components/ui/Rating';

interface ClientReviewProps {
  fullName: string;
  rating: number;
  images?: string[];
  text: string;
  createdAt: string;
}

const ClientReview = ({ fullName, images, rating, text, createdAt }: ClientReviewProps) => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewer}>
        <div className={styles.reviewerLogo}>
          <Image src={userLogo} alt="user logo" />
        </div>
        <div className={styles.reviewerData}>
          <p>
            {fullName}
            <br />
            оставил отзыв {createdAt.slice(0, 10).split('-').reverse().join('.')}
          </p>
          <Rating value={rating} />
        </div>
      </div>
      <div className={styles.content}>
        {/* {fullName !== 'Gojo' && <PicsReview />} */}
        <p className={`${images?.length ? styles.textNPics : styles.text}`}>
          {/* {text.length > 359 ? text.slice(0, 359) + '...' : text}
          {false && <span>{text.slice(359)}</span>} */}
        </p>
        {text.length > 359 && (
          <p className={styles.readMore}>{true && <span>Читать подробнее</span>}</p>
        )}
      </div>
    </div>
  );
};

export default ClientReview;
