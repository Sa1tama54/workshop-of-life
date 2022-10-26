import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
