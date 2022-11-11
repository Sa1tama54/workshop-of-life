import React from 'react';
import {
  Edit,
  EditProps,
  ImageField,
  ImageInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

const ServiceEditToolbar = () => {
  return (
    <Toolbar>
      <SaveButton label="Изменить" />
    </Toolbar>
  );
};

const ServicesEdit = (props: EditProps) => {
  return (
    <Edit title="Изменить услугу" {...props}>
      <SimpleForm toolbar={<ServiceEditToolbar />}>
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
    </Edit>
  );
};

export default ServicesEdit;
