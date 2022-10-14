import React from 'react';
import styled from 'styled-components';
import ButtonServices from './ui/Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const MainBlock = styled.div`
  width: 279px;
  height: 337px;
  margin-left: 20px;
  background: #f3f3f3;
  margin-bottom: 50px;
  border-radius: 10px;
  overflow: hidden;
`;

const ImgDiv = styled.div``;
const ImgC = styled.img`
  width: 100%;
  height: 100%;
`;

const DescDiv = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 143%;
  color: #2e363e;
  margin-left: 30px;
`;

const BtnDiv = styled.div`
  min-width: 200px;
  margin-top: 20px;
  margin-left: 20%;
`;

const Btn = styled.button`
  max-width: 130px;
  height: 30px;
  padding: 5px;
  color: #ffffff;
  background: #ac0000;
  border-radius: 8px;
  border: none;
`;

const card: { desc: string; url: string }[] = [
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
  {
    desc: 'hello world',
    url: 'https://tehpanda.ru/wa-data/public/shop/products/82/13/1382/images/1495/1495.970.JPG',
  },
];

const CardMap: React.FC = () => {
  const [check, setChecked] = React.useState(false);

  const handleClick = () => {
    setChecked(!check);
  };

  return (
    <>
      <Container>
        {card.map((item, index) => {
          return (
            <>
              <MainBlock key={index}>
                <ImgDiv>
                  <ImgC src={item.url} key={index} alt="workplan_human" />
                </ImgDiv>
                <DescDiv>{item.desc}</DescDiv>
                <BtnDiv>
                  {/* <Btn onClick={handleClick}>Оставить заявку</Btn> */}
                  <ButtonServices />
                </BtnDiv>
              </MainBlock>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default CardMap;
