import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styles from './Tabs.module.scss';
import { useRouter } from 'next/router';

const routes = [
  {
    name: 'Услуги',
    path: '/services',
  },
  {
    name: 'Каталог товаров',
    path: '/products',
  },
];

const BasicTabs = () => {
  const router = useRouter();

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Box sx={{ borderBottom: 1, borderColor: '#AC0000' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: 'none',
              },
            }}
          >
            {routes.map((obj) => (
              <Tab
                key={obj.path}
                label={obj.name}
                style={{ color: router.asPath === obj.path ? '#AC0000' : 'black' }}
              />
            ))}
          </Tabs>
        </Box>
      </div>
    </>
  );
};

export default BasicTabs;
