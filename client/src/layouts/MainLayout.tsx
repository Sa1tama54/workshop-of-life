import { FC } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import BasicTabs from '../components/ui/Tabs';

interface MainLayoutProps {
  hideTabs?: boolean;
  children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children, hideTabs }) => {
  return (
    <>
      <Header />
      <div className="content">
        {!hideTabs && <BasicTabs />}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
