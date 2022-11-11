import {
  DateField,
  ImageField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

const ServicesShow = () => (
  <Show>
    <SimpleShowLayout>
      <ReferenceField label="Вид услуги" source="category" reference="categories">
        <TextField source="title" />
      </ReferenceField>
      <TextField label="Название услуги" source="title" />
      <ImageField
        label="Изображение"
        source="preview"
        sx={{
          maxWidth: 500,
          maxHeight: 500,
          '& img': { width: '100% !important', height: '100% !important' },
        }}
      />
    </SimpleShowLayout>
  </Show>
);

export default ServicesShow;
