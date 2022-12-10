import { ChangeEvent, FormEvent, useState } from 'react';
import { reviewSelector } from 'redux/reviews/selector';
import { useAppSelector } from 'common/hooks/useAppSelector';
import Rating from 'components/ui/Rating';
import styles from './AverageRating.module.scss';
import PModal from 'components/ui/AddReview';
import { ReviewSliceState } from 'redux/reviews/interfaces';
import AppButton from 'components/ui/Button';

const AverageRating = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [review, setReview] = useState<string>('');
  const [name, setName] = useState<string>('');

  const reviews = useAppSelector<ReviewSliceState>(reviewSelector).reviews;

  const avg = parseInt(
    (reviews.reduce((acc, review) => review.rating + acc, 0) / reviews.length).toFixed(1)
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleWriteName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleWriteReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <div className={styles.generalRevs}>
          <p className={styles.countRevs}>
            123 <span>Оценки клиентов</span>
          </p>
          <Rating value={avg} />
          <span className={styles.avgScore}>{avg} из 5 средняя оценка клиентов</span>
          <AppButton handleOpen={() => setOpen(true)}>Добавить отзыв</AppButton>
          {open && (
            <PModal selector="#modal">
              <div className={styles.overlay}>
                <form onSubmit={handleSubmit} className={styles.modalBlock}>
                  <p>Оставить отзыв</p>
                  <input
                    value={name}
                    onChange={handleWriteName}
                    className={styles.naming}
                    type="text"
                    placeholder="Имя и фамилия"
                  />
                  <textarea
                    style={{ resize: 'none' }}
                    value={review}
                    onChange={handleWriteReview}
                    className={styles.review}
                    placeholder="Отзыв"
                  />
                  {/* star */}
                  <AppButton handleOpen={() => setOpen(false)}>Отправить</AppButton>
                  {/* <button className={styles.sendReviewBtn} onClick={() => setOpen(false)}>
                    Отправить
                  </button> */}
                </form>
              </div>
            </PModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AverageRating;
