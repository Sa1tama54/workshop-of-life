import React from 'react';
import {
  CreateButton,
  Datagrid,
  DeleteButton,
  EditButton,
  ExportButton,
  List,
  ListProps,
  ShowButton,
  TextField,
  TopToolbar,
} from 'react-admin';

const ProductListActions = () => (
  <TopToolbar>
    <CreateButton label="Добавить" />
    <ExportButton />
  </TopToolbar>
);

const ProductsList = (props: ListProps) => {
  return (
    <List actions={<ProductListActions />} title="Список товаров" {...props}>
      <Datagrid>
        <TextField source="title" label="Название товара" />
        <TextField source="price" label="Цена" />
        <EditButton label="Изменить" resource="products" />
        <ShowButton label="Просмотреть" resource="products" />
        <DeleteButton label="Удалить" resource="products" />
      </Datagrid>
    </List>
  );
};

export default ProductsList;
