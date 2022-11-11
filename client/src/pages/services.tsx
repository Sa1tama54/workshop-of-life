import React from 'react';
import styles from 'components/Services/Services.module.scss';
import ServicesCard from 'components/Services/ServicesCard/ServicesCard';
import InformBanner from 'components/Services/InformBanner/InformBanner';
import Categories from 'components/Services/Categories';
import MainLayout from 'layouts/MainLayout';
import Paginations from 'components/ui/Pagination';
import Search from 'components/ui/Search';

const Services: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        <ServicesCard />
      </div>
      <Paginations />
    </MainLayout>
  );
};

export default Services;
