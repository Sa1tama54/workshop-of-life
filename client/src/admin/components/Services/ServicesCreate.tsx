import React from 'react';
import {
  Create,
  CreateProps,
  ImageField,
  ImageInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

const ServiceCreateToolbar = () => {
  return (
    <Toolbar>
      <SaveButton label="Добавить" />
    </Toolbar>
  );
};

const ServicesCreate = (props: CreateProps) => {
  return (
    <Create title="Добавить услугу" {...props}>
      <SimpleForm toolbar={<ServiceCreateToolbar />}>
        <ReferenceInput source="category" reference="categories">
          <SelectInput
            emptyText="Вид услуги не выбран"
            sx={{ minWidth: 230 }}
            label="Выберите вид услуги"
            optionText="title"
          />
        </ReferenceInput>
        <TextInput source="title" label="Название услуги" />
        <ImageInput
          source="preview"
          label="Выберите файл"
          placeholder={
            <p style={{ border: '1px solid #ac0000', padding: 10 }}>Добавить фотографию</p>
          }
        >
          <ImageField
            label="Изображение"
            source="src"
            sx={{
              maxWidth: 500,
              maxHeight: 500,
              '& img': { width: '100% !important', height: '100% !important' },
            }}
          />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ServicesCreate;
