import React from 'react';
import styled from 'styled-components';

const InfDiv = styled.div`
  width: 600px;
  overflow: hidden;
  min-height: 425px;
  border-radius: 20px;
  background: #f3f3f3;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;

const ImgContainer = styled.div`
  width: 50%;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  padding: 15px;
  width: 50%;
`;

const Text = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 120%;
  margin-top: 10px;
`;

const TextP = styled.p`
  padding: 5px;
  margin-top: 25px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 120%;
  color: #9e9e9e;
`;

const InformBanner: React.FC = () => {
  const logo: { url: string }[] = [
    {
      url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
    },
  ];

  return (
    <InfDiv>
      <ImgContainer>
        {logo.map((item, index) => {
          return <Logo src={item.url} key={index} alt="workplan_human" />;
        })}
        <p>Lorem ipsum dolor sit amet.</p>
      </ImgContainer>
      <TextContainer>
        <Text>Установка бытовой техники</Text>
        <TextP>
          Установка и продажа кондиционеров. Ремонт чистка и продув. Гарантия на установку и продажу
          кондиционеров Без пыли аккуратно и максимально качественно
        </TextP>
      </TextContainer>
    </InfDiv>
  );
};

export default InformBanner;
