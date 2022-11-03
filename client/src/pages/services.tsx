import React from 'react';
import ServicesNavbar from '../components/ServicesNavbar/ServicesNavbar';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import MainLayout from '../layouts/MainLayout';
import ServicesCard from '../components/ServicesCard/ServicesCard';
import styles from '../styles/Services.module.scss';
import InformBanner from '../components/InformBanner/InformBanner';

const Services: React.FC = () => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <ServicesNavbar />
        <div className={styles.rightBlock}>
          <Search />
          <InformBanner />
        </div>
      </div>
      <div>
        <ServicesCard />
      </div>
      <Paginations />
    </MainLayout>
  );
};

export default Services;