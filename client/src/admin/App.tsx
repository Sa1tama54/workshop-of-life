import { Admin, Resource } from 'react-admin';
import { MyLayout } from 'admin/components/MyLayout';
import dataProvider from 'admin/providers/dataProvider';
import authProvider from 'admin/providers/AuthProvider/authProvider';
import LoginPage from 'admin/LoginPage';
import { lightTheme } from 'admin/theme';
import { modules } from 'admin/MyComponents';

const ReactAdmin = () => {
  return (
    <Admin
      theme={lightTheme}
      loginPage={LoginPage}
      layout={MyLayout}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource
        name="services"
        list={modules.ServicesList}
        create={modules.ServicesCreate}
        edit={modules.ServicesEdit}
        show={modules.ServicesShow}
      />
      <Resource
        name="products"
        list={modules.ProductsList}
        create={modules.ProductCreate}
        edit={modules.ProductEdit}
        show={modules.ProductShow}
      />
    </Admin>
  );
};

export default ReactAdmin;
