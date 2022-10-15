import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 250px;
  margin-bottom: 40px;
`;

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <MainBlock>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#AC0000',
              },
            }}
          >
            <Tab label="Услуги" style={{ color: value === 1 ? 'black' : '#AC0000' }} />
            <Tab label="Каталог товаров" style={{ color: value === 0 ? 'black' : '#AC0000' }} />
          </Tabs>
        </Box>
      </MainBlock>
    </>
  );
}
