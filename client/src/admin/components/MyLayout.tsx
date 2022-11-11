import { AppBar, AppBarProps, CoreLayoutProps, Layout } from 'react-admin';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { MyMenu } from 'admin/components/MyMenu';
import { ThemeToggler } from 'admin/components/ThemeToggler';

const MyAppBar = (props: AppBarProps) => (
  <AppBar {...props}>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    <ThemeToggler />
  </AppBar>
);

export const MyLayout = (props: CoreLayoutProps) => (
  <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
);
