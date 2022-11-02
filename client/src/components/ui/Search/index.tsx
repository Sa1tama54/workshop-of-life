import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <>
      <div className={styles.mainBlock}>
        <span className={styles.iconSearch}>
          <SearchIcon />
        </span>
        <input type="text" placeholder="Поиск по услугам" className={styles.searchBlock} />
      </div>
    </>
  );
};

export default Search;
