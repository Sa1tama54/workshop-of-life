import React from 'react';
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

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sortTitle}>
        <ArrowDropUpIcon />
        <b>Сортировка:</b>
        <span className={styles.sortActiveItem} onClick={() => setOpen(!open)}>
          {sort?.name}
        </span>
      </div>
      {open && (
        <div className={styles.sortPopup}>
          <ul>
            {sortList.map((obj) => (
              <li
                key={obj.sortProperty}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? styles.active : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
