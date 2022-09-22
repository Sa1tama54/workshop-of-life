import React from 'react';
import Navbar from '../components/servicesPage/navbar';
import Paginations from '../components/ui/Pagination';
import Search from '../components/ui/Search';
import BasicTabs from '../components/ui/Tabs';

const Services = () => {
  return (
    <>
      <Search />
      <BasicTabs />
      <Navbar />
      <Paginations />
    </>
  );
};

export default Services;
