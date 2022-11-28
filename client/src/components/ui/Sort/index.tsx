import React from 'react';
import { Button, Fade, Menu, MenuItem } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';

import { SortItem } from 'redux/filter/interfaces';
import { filterSelector } from 'redux/filter/selector';
import { setSort } from 'redux/filter/slice';

import styles from 'components/ui/Sort/Sort.module.scss';

const Sort = ({ sortList }: { sortList: SortItem[] }) => {
  const dispatch = useAppDispatch();
  const { sort } = useAppSelector(filterSelector);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    handleClose();
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sortTitle}>
        <ArrowDropUpIcon />
        <b>Сортировка:</b>
      </div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuItem className={styles.sortActiveItem} onClick={handleClose}>
          {sort?.name}
        </MenuItem>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {sortList.map((obj) => (
          <MenuItem
            className={`${styles.sortItem} ${
              sort.sortProperty === obj.sortProperty ? styles.active : ''
            }`}
            key={obj.sortProperty}
            onClick={() => onClickListItem(obj)}
          >
            {obj.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Sort;
