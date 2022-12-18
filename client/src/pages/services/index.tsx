import React from 'react';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

import MainLayout from 'layouts/MainLayout';

import ServicesCard from 'components/Services/ServicesCard';
import InformBanner from 'components/Services/ServicesBanner';
import Categories from 'components/Services/Categories';
import Search from 'components/ui/Search';
import Paginations from 'components/ui/Pagination';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';

import { filterSelector } from 'redux/filter/selector';
import { selectorService } from 'redux/services/selectors';
import { fetchServices } from 'redux/services/asyncActions';
import { ServicesItem } from 'redux/services/types';

import styles from 'pages/services/Services.module.scss';
import NotFoundItems from 'components/NotFoundItems';

const CardSkeleton = dynamic(import('components/ui/CardSkeleton'), { ssr: false });

const ServicesPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { sort, categoryName, searchValue, currentPage } = useAppSelector(filterSelector);

  const { allServices, total, status } = useAppSelector(selectorService);

  React.useEffect(() => {
    dispatch(
      fetchServices({
        currentPage: currentPage,
        categoryName,
        searchValue,
        sort,
      })
    );
    scroll.scrollToTop();
  }, [dispatch, currentPage, categoryName, sort, searchValue]);

  const services = allServices.map((service: ServicesItem) => (
    <ServicesCard key={service._id} service={service} />
  ));

  const skeletons = [...new Array(6)].map((_, index) => <CardSkeleton key={index} />);

  return (
    <MainLayout path={router.asPath} headingTitle="Услуги">
      <div className={styles.main}>
        <Categories />
        <InformBanner />
      </div>
      <div className={styles.content}>
        <Search />
        {status === 'completed' && !total ? (
          <NotFoundItems />
        ) : (
          <>
            <div className={styles.cards}>{status === 'loading' ? skeletons : services}</div>
          </>
        )}
      </div>
      <Paginations currentPage={currentPage} productsCount={total} />
    </MainLayout>
  );
};

export default ServicesPage;
