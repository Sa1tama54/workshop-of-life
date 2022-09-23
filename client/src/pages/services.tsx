import React from 'react';
import styled from 'styled-components';
import CardMap from '../components/CardMap';
import InformBanner from '../components/InformBanner';
import Navbar from '../components/Navbar';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import BasicTabs from '../components/ui/Tabs';
import MainLayout from '../layouts/MainLayout';

const MainBlock = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

const NavBlock = styled.div`
  width: 30px;
`;

const RightBlock = styled.div`
  width: 60%;
`;

const SecondBlock = styled.div`
  width: 80%;
  margin-left: 20%;
`;

const Services = () => {
  return (
    <MainLayout>
      <MainBlock>
        <NavBlock>
          <BasicTabs />
          <Navbar />
        </NavBlock>
        <RightBlock>
          <Search />
          <InformBanner />
        </RightBlock>
      </MainBlock>
      <SecondBlock>
        <CardMap />
        <Paginations />
      </SecondBlock>
    </MainLayout>
  );
};

export default Services;
