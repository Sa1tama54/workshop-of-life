import { Admin, Resource } from 'react-admin';
import ProductCreate from 'admin/components/Product/ProductCreate';
import ProductsList from 'admin/components/Product/ProductsList';
import ProductEdit from 'admin/components/Product/ProductEdit';
import { MyLayout } from 'admin/components/MyLayout';
import dataProvider from 'admin/providers/dataProvider';
import { authProvider } from 'admin/providers/authProvider';
import LoginPage from 'admin/pages/LoginPage';
import { lightTheme } from 'admin/theme';

const ReactAdmin = () => {
  return (
    <Admin
      theme={lightTheme}
      loginPage={LoginPage}
      layout={MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="products" list={ProductsList} create={ProductCreate} edit={ProductEdit} />
    </Admin>
  );
};

export default ReactAdmin;
