import Heading from 'components/ui/Heading';
import MainLayout from 'layouts/MainLayout';
import styles from './Reviews.module.scss';
import { AvgScore, WithProgressBar, ClientsPics } from 'components/Reviews';
import Sort from 'components/ui/Sort';

const Reviews = () => {
  return (
    <MainLayout hideTabs={true}>
      <Heading>Отзывы</Heading>
      <section className={styles.scoreBar}>
        <AvgScore />
        <WithProgressBar />
      </section>
      <section className={styles.picsClients}>
        <ClientsPics />
      </section>
      <div className={styles.sortUI}>
        <Sort />
      </div>
    </MainLayout>
  );
};

export default Reviews;
