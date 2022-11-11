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

const ServicesListActions = () => (
  <TopToolbar>
    <CreateButton scrollToTop={true} label="Добавить" />
    <ExportButton />
  </TopToolbar>
);

const ServicesList = (props: ListProps) => {
  return (
    <List actions={<ServicesListActions />} title="Список услуг" {...props}>
      <Datagrid>
        <TextField source="title" label="Название услуги" />
        <TextField source="category.title" label="Вид услуги" sortable={false} />
        <EditButton label="Изменить" resource="services" />
        <ShowButton label="Просмотреть" resource="services" />
        <DeleteButton label="Удалить" resource="services" />
      </Datagrid>
    </List>
  );
};

export default ServicesList;
