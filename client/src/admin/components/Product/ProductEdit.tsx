import React from 'react';
import {
  Edit,
  EditProps,
  ImageField,
  ImageInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

const ProductEditToolbar = () => {
  return (
    <Toolbar>
      <SaveButton label="Изменить" />
    </Toolbar>
  );
};

const ProductEdit = (props: EditProps) => {
  return (
    <Edit title="Изменить" {...props}>
      <SimpleForm toolbar={<ProductEditToolbar />}>
        <TextInput source="title" label="Название продукта" />
        <TextInput multiline source="description" label="Описание" />
        <NumberInput source="price" label="Цена" options={{ style: 'currency', currency: '₽' }} />
        <ImageInput
          source="preview"
          label="Выберите файл"
          placeholder={
            <p style={{ border: '1px solid #ac0000', padding: 10 }}>Добавить фотографию</p>
          }
        >
          <ImageField
            source="src"
            title="title"
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

export default ProductEdit;
