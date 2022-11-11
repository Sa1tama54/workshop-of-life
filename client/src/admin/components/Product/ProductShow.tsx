import {
  ImageField,
  NumberField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin';

const ProductShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField label="Название товара" source="title" />
      <RichTextField label="Описание" source="description" />
      <NumberField
        label="Товар"
        source="price"
        locales="fr-FR"
        options={{ style: 'currency', currency: 'RUB' }}
      />
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

export default ProductShow;
