import React from 'react';
import styles from './ServicesNavbar.module.scss';

const ServicesNavbar: React.FC = () => {
  const Categories: { name: string }[] = [
    { name: 'Уникальные и коллекционные книги' },
    { name: 'Собрания сочинений и библиотеки' },
    { name: 'Искусство и культура' },
    { name: 'История, философия, психология' },
    { name: 'Установка бытовыой техники' },
    { name: 'Фотоальбомы' },
    { name: 'Кожаные ежедневники и др.' },
    { name: 'Подержанные книги' },
    { name: 'Мебель для кабинета и библиотеки' },
  ];

  return (
    <div className={styles.main}>
      {Categories.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <li className={styles.categoriesList}>{item.name}</li>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ServicesNavbar;
