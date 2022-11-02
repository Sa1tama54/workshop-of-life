import React from 'react';
import styled from 'styled-components';

const CategoriesDiv = styled.ul`
  width: 300px;
  padding: 11px 15px;
  line-height: 1.5;
  font-size: 14px;
  list-style-type: none;
  background: #f3f3f3;
  max-height: 569px;
  border-radius: 5px;
`;

const CategoriesItem = styled.li`
  margin-bottom: 15px;
  padding-top: 5px;
  list-style-type: none;
  background: #f3f3f3;
  cursor: pointer;
  overflow: hidden;
`;

const ServicesNavbar = () => {
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
    <>
      <CategoriesDiv>
        {Categories.map((item, index) => {
          return (
            <>
              <CategoriesItem key={index}> {item.name}</CategoriesItem>
            </>
          );
        })}
      </CategoriesDiv>
    </>
  );
};

export default ServicesNavbar;