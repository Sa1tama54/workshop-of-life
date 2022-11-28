import React from 'react';

import ProductCard from 'components/Products/ProductCard';
import Paginations from 'components/ui/Pagination';
import Search from 'components/ui/Search';
import Sort from 'components/ui/Sort';

import MainLayout from 'layouts/MainLayout';

import { getAllProducts } from 'redux/products/asyncActions';
import { SortItem, SortPropertyEnum } from 'redux/filter/interfaces';
import { filterSelector } from 'redux/filter/selector';
import { productSelector } from 'redux/products/selector';

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
  const { allProducts, total } = useAppSelector(productSelector);

  React.useEffect(() => {
    dispatch(
      getAllProducts({
        sortBy: sort.sortProperty,
        searchValue,
        currentPage: String(currentPage),
      })
    );
  }, [dispatch, sort, categoryName, searchValue, currentPage]);

  return (
    <MainLayout>
      <div className={styles.filterFeatures}>
        <Search />
        <Sort sortList={sortList} />
      </div>
      <div className={styles.cards}>
        {allProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Paginations currentPage={currentPage} productsCount={total} />
    </MainLayout>
  );
};

export default Products;
