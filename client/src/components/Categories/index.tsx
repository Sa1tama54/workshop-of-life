import React from 'react';
import styles from './Categories.module.scss';

const categories = [
  'Все',
  'Сантехника',
  'Грузоперевозки',
  'Ремонт и установка бытовой техники',
  'Электрика',
  'Ремонт электро-приборов',
  'Прочее',
  'Прочее',
  'Прочее',
  'Прочее',
  'Прочее',
];

const Categories: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onChangeCategory = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((name, i) => {
          return (
            <li
              onClick={() => onChangeCategory(i)}
              className={activeIndex === i ? styles.active : ''}
              key={i}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
