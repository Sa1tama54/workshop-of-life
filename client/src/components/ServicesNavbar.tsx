import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const CategoriesDiv = styled.div`
  width: 300px;
  padding: 15px 7px;
  line-height: 1.5;
  font-size: 14px;
  list-style-type: none;
  background: #f3f3f3;
  max-height: 569px;
  border-radius: 5px;
`;

const CategoriesList = styled.li`
  margin-bottom: 15px;
  padding-top: 5px;
  list-style-type: none;
  background: #f3f3f3;
  cursor: pointer;
  overflow: hidden;
`;

const ServicesNavbar = () => {
  const Categories: { name: string; path: string }[] = [
    { name: 'Уникальные и коллекционные книги', path: '/books' },
    { name: 'Собрания сочинений и библиотеки', path: '/textS' },
    { name: 'Искусство и культура', path: '/iss' },
    { name: 'История, философия, психология', path: '/history' },
    { name: 'Установка бытовой техники', path: '/tec' },
    { name: 'Фотоальбомы', path: '/photo' },
    { name: 'Кожаные ежедневники и др.', path: '/koj' },
    { name: 'Подержанные книги', path: '/rarelyBooks' },
    { name: 'Мебель для кабинета и библиотеки', path: '/Cab' },
  ];

  return (
    <>
      <CategoriesDiv>
        {Categories.map((item, index) => {
          return (
            <>
              <Link href="">
                <CategoriesList key={index} color="secondary">
                  {' '}
                  {item.name}
                </CategoriesList>
              </Link>
            </>
          );
        })}
      </CategoriesDiv>
    </>
  );
};

export default ServicesNavbar;
