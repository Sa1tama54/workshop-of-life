import React from 'react';

import MainLayout from 'layouts/MainLayout';

import ServicesCard from 'components/Services/ServicesCard';
import InformBanner from 'components/Services/ServicesBanner';
import Categories from 'components/Services/Categories';
import Search from 'components/ui/Search';

import { fetchServices } from 'redux/services/asyncActions';
import { ServicesItem } from 'redux/services/types';
import { store } from 'redux/store';

import styles from './Services.module.scss';
import Paginations from 'components/ui/Pagination';

const ServicesPage = ({ services }: { services: ServicesItem[] }) => {
  return (
    <MainLayout>
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        <div className={styles.cards}>
          {services.map((item) => (
            <ServicesCard service={item} key={item._id} />
          ))}
        </div>
      </div>
      <Paginations />
    </MainLayout>
  );
};

export const getServerSideProps = async () => {
  await store.dispatch(fetchServices());

  return {
    props: {
      services: store.getState().services.items,
    },
  };
};

export default ServicesPage;
