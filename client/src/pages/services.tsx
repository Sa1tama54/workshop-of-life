import React from 'react';
import styled from 'styled-components';
import InformBanner from '../components/InformBanner/InformBanner';
import ServicesNavbar from '../components/ServicesNavbar/ServicesNavbar';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import BasicTabs from '../components/ui/Tabs';
import MainLayout from '../layouts/MainLayout';
import ServicesCard from '../components/ServicesCard/ServicesCard';
import styles from '../styles/Pages.module.scss';

const RightBlock = styled.div`
  width: 823px;
  height: 500px;
  margin-left: 97px;
`;

const SecondBlock = styled.div`
  width: 90%;
  margin-left: 10%;
`;

const TabsBlock = styled.div``;

const Services: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <BasicTabs />
      </div>
      <div className={styles.main}>
        <ServicesNavbar />
        <div className={styles.rightBlock}>
          <Search />
          <InformBanner />
        </div>
      </div>
      <div className={styles.center}>
        {' '}
        <ServicesCard />
      </div>
      <Paginations />
    </MainLayout>
  );
};

export default Services;
