import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { fetchCategories } from 'redux/categories/asyncActions';
import React from 'react';
import styles from './Categories.module.scss';
import { setCategoryName } from 'redux/filter/slice';

const Categories: React.FC = () => {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.items);
  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onChangeCategory = (title: string) => {
    dispatch(setCategoryName(title));
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={() => onChangeCategory(item.title)}
              className={item.title === categoryName ? styles.active : ''}
              key={item.id}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
