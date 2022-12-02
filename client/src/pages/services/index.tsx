import React from 'react';

import MainLayout from 'layouts/MainLayout';

import ServicesCard from 'components/Services/ServicesCard';
import InformBanner from 'components/Services/ServicesBanner';
import Categories from 'components/Services/Categories';
import Search from 'components/ui/Search';

import { fetchServices } from 'redux/services/asyncActions';
import { ServicesItem } from 'redux/services/types';

import styles from './Services.module.scss';
import Paginations from 'components/ui/Pagination';
import { useRouter } from 'next/router';
import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { filterSelector } from 'redux/filter/selector';
import { selectorService } from 'redux/services/selectors';

const ServicesPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { sort, categoryName, searchValue, currentPage } = useAppSelector(filterSelector);

  const { allServices, total } = useAppSelector(selectorService);

  React.useEffect(() => {
    dispatch(
      fetchServices({
        currentPage: currentPage,
        categoryName,
        searchValue,
        sort,
      })
    );
    // scroll.scrollToTop();
  }, [dispatch, currentPage, categoryName, sort, searchValue]);

  const services = allServices.map((service: ServicesItem) => (
    <ServicesCard key={service._id} service={service} />
  ));

  return (
    <MainLayout path={router.asPath} headingTitle="Каталог товаров">
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        <div className={styles.cards}>{services}</div>
      </div>
      <Paginations currentPage={currentPage} productsCount={total} />
    </MainLayout>
  );
};

// export const getServerSideProps = async () => {
//   await store.dispatch(fetchServices());

//   return {
//     props: {
//       services: store.getState().services.items,
//     },
//   };
// };

export default ServicesPage;
