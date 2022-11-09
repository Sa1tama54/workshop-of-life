import { Menu } from 'react-admin';
import { Badge } from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServicesOutlined';
import StarIcon from '@mui/icons-material/StarOutlineOutlined';
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import WorkIcon from '@mui/icons-material/WorkOutline';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibraryOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';

export const MyMenu = () => (
  <Menu sx={{ background: '#F3F3F3', height: '100% !important', margin: 0, paddingTop: 5 }}>
    <Menu.Item
      to="/requests"
      primaryText={
        <Badge badgeContent={4} color="primary">
          Заявки
        </Badge>
      }
      leftIcon={<DescriptionIcon />}
    />
    <Menu.Item to="/services" primaryText="Услуги" leftIcon={<ElectricalServicesIcon />} />
    <Menu.Item to="/categories" primaryText="Категории" leftIcon={<CategoryIcon />} />
    <Menu.Item to="/products" primaryText="Товары" leftIcon={<ShoppingCartIcon />} />
    <Menu.Item to="/reviews" primaryText="Отзывы" leftIcon={<StarIcon />} />
    <Menu.Item to="/vacancies" primaryText="Вакансии" leftIcon={<WorkIcon />} />
    <Menu.Item to="/photos" primaryText="Галерея" leftIcon={<PhotoLibraryIcon />} />
  </Menu>
);
