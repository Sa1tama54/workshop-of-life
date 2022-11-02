import React from 'react';
import styled from 'styled-components';
import CardMap from '../components/ServicesCard';
import InformBanner from '../components/InformBanner';
import ServicesNavbar from '../components/ServicesNavbar';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import BasicTabs from '../components/ui/Tabs';
import MainLayout from '../layouts/MainLayout';
import ServicesCard from '../components/ServicesCard';

const MainBlock = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 50px;
`;

const RightBlock = styled.div`
  width: 823px;
  height: 500px;
  margin-left: 97px;
`;

const SecondBlock = styled.div`
  width: 90%;
  margin-left: 10%;
`;

const TabsBlock = styled.div``;

const Services = () => {
  return (
    <MainLayout>
      <TabsBlock>
        <BasicTabs />
      </TabsBlock>
      <MainBlock>
        <ServicesNavbar />
        <RightBlock>
          <Search />
          <InformBanner />
        </RightBlock>
      </MainBlock>
      <SecondBlock>
        <ServicesCard />
      </SecondBlock>
      <Paginations />
    </MainLayout>
  );
};

export default Services;
