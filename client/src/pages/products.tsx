import React from 'react';
import Paginations from '../components/ui/Pagination';
import ProductCard from '../components/ui/ProductCard';
import Search from '../components/ui/Search';
import Sort from '../components/ui/Sort';
import MainLayout from '../layouts/MainLayout';

import styles from '../styles/pages/Products.module.scss';

const Products = () => {
  return (
    <MainLayout>
      <div className={styles.filterFeatures}>
        <Search />
        <Sort />
      </div>
      <div className={styles.cards}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Paginations />
    </MainLayout>
  );
};

export default Products;
