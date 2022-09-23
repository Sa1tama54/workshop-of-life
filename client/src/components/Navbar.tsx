import React from 'react';
import styled from 'styled-components';

const CatDiv = styled.div`
  width: 350px;
  margin-left: 40px;
  padding: 15px;
  line-height: 1.5;
  list-style-type: none;
  background: #f3f3f3;
`;

const Navbar = () => {
  const Cat: { name: string }[] = [
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
      {Cat.map((item, index) => {
        return (
          <CatDiv key={index}>
            <li>{item.name}</li>
          </CatDiv>
        );
      })}
    </>
  );
};

export default Navbar;
