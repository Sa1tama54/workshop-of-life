import React from 'react';
import {
  Create,
  CreateProps,
  FileField,
  FileInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

const PostCreateToolbar = () => {
  return (
    <Toolbar>
      <SaveButton label="Добавить" />
    </Toolbar>
  );
};

const ProductCreate = (props: CreateProps) => {
  return (
    <Create title="Добавить товар" {...props}>
      <SimpleForm toolbar={<PostCreateToolbar />}>
        <TextInput source="title" label="Название продукта" />
        <TextInput multiline source="description" label="Описание" />
        <NumberInput source="price" label="Цена" />
        <FileInput
          source="preview"
          label="Выберите файл"
          placeholder={
            <p style={{ border: '1px solid #ac0000', padding: 10 }}>Добавить фотографию</p>
          }
        >
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
