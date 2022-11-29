import React from 'react';
import { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

import ProductCard from 'components/Products/ProductCard';
import Paginations from 'components/ui/Pagination';
import Search from 'components/ui/Search';
import Sort from 'components/ui/Sort';
import CardSkeleton from 'components/ui/CardSkeleton';
import NotFoundItems from 'components/NotFoundItems';

import MainLayout from 'layouts/MainLayout';

import { getAllProducts } from 'redux/products/asyncActions';
import { SortItem, SortPropertyEnum } from 'redux/filter/interfaces';
import { filterSelector } from 'redux/filter/selector';
import { productSelector } from 'redux/products/selector';
import { ProductItem } from 'redux/products/interfaces';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';

import styles from 'pages/products/Products.module.scss';

const sortList: SortItem[] = [
  { name: 'По умолчанию', sortProperty: '' },
  { name: 'Цена, высокая-низкая', sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: 'Цена, низкая-высокая', sortProperty: SortPropertyEnum.PRICE_ASC },
];

const Products = () => {
  const dispatch = useAppDispatch();
  const { sort, categoryName, searchValue, currentPage } = useAppSelector(filterSelector);
  const { allProducts, total, status } = useAppSelector(productSelector);

  const router = useRouter();

  React.useEffect(() => {
    dispatch(
      getAllProducts({
        sortBy: sort.sortProperty,
        searchValue,
        currentPage: String(currentPage),
      })
    );
    scroll.scrollToTop();
  }, [dispatch, sort, categoryName, searchValue, currentPage]);

  const products = allProducts.map((product: ProductItem) => (
    <ProductCard key={product._id} product={product} />
  ));

  const skeletons = [...new Array(6)].map((_, index) => <CardSkeleton key={index} />);

  return (
    <MainLayout path={router.asPath} headingTitle="Каталог товаров">
      <div className={styles.filterFeatures} data-aos="fade-right">
        <Search />
        <Sort sortList={sortList} />
      </div>
      {status === 'success' && !total ? (
        <NotFoundItems />
      ) : (
        <>
          <div className={styles.cards}>{status === 'loading' ? skeletons : products}</div>
          <Paginations currentPage={currentPage} productsCount={total} />
        </>
      )}
    </MainLayout>
  );
};

export default Products;
