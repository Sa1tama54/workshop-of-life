import { useAppDispatch } from 'common/hooks/useAppDispatch';
import { useAppSelector } from 'common/hooks/useAppSelector';
import { fetchCategories } from 'redux/categories/asyncActions';
import React from 'react';
import styles from './Categories.module.scss';

const Categories: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.items);
  console.log(categories);
  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onChangeCategory = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              onClick={() => onChangeCategory(i)}
              className={activeIndex === i ? styles.active : ''}
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
