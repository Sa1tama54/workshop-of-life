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
    <ul className={styles.categoriesList}>
      {Categories.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};

export default ServicesNavbar;