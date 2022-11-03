import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <>
      <div className={styles.search}>
        <span>
          <SearchIcon />
        </span>
        <input type="text" placeholder="Поиск по услугам" />
      </div>
    </>
  );
};

export default Search;
