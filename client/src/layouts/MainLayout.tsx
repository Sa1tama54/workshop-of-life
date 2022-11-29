import Footer from 'components/Footer';
import Header from 'components/Header';
import Heading from 'components/ui/Heading';

interface MainLayoutProps {
  children?: React.ReactNode;
  headingTitle?: string;
  path: string;
}

const MainLayout = ({ children, headingTitle, path }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Heading linkPath={path}>{headingTitle}</Heading>
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
