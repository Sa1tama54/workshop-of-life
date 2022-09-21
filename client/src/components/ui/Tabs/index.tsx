import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MainBlock = styled.div`
  margin-left: 40px;
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
        <Box sx={{ width: '100%' }}>
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
              <Tab
                label="Услуги"
                {...a11yProps(0)}
                style={{ color: value === 1 ? 'black' : '#AC0000' }}
              />
              <Tab
                label="Каталог товаров"
                {...a11yProps(1)}
                style={{ color: value === 0 ? 'black' : '#AC0000' }}
              />
            </Tabs>
          </Box>
        </Box>
      </MainBlock>
    </>
  );
}
