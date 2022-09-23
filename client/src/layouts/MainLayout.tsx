import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styled from 'styled-components';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainContent = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default MainLayout;
