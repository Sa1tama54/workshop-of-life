import React, { useState } from 'react';
import styled from 'styled-components';

const CatDiv = styled.div`
  width: 300px;
  // margin-left: 40px;
  padding: 15px 7px;
  line-height: 1.5;
  font-size: 14px;
  list-style-type: none;
  background: #f3f3f3;
  max-height: 569px;
  border-radius: 5px;
`;

const Ul = styled.ul``;

const Li = styled.li`
  margin-bottom: 15px;
  padding-top: 5px;
  list-style-type: none;
  background: #f3f3f3;
  cursor: pointer;
  overflow: hidden;
`;

const ServicesNavbar = () => {
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
      <CatDiv>
        {Cat.map((item, index) => {
          return (
            <>
              <Li key={index}> {item.name}</Li>
            </>
          );
        })}
      </CatDiv>
    </>
  );
};

export default ServicesNavbar;
