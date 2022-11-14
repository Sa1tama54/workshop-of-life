import React from 'react';
import styles from './Services.module.scss';
import ServicesCard from 'components/Services/ServicesCard';
import InformBanner from 'components/Services/ServicesBanner';
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
