import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { setCurrentPage } from 'redux/filter/slice';

import { useAppDispatch } from 'common/hooks/useAppDispatch';

import styles from 'components/ui/Pagination/Pagination.module.scss';
interface PaginationProps {
  currentPage: number;
  productsCount: number;
}

const Paginations = ({ currentPage, productsCount }: PaginationProps) => {
  const dispatch = useAppDispatch();

  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value));
  };

  return (
    <div className={styles.wrapper}>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(productsCount / 8)}
          page={currentPage}
          onChange={onChangePage}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default Paginations;
