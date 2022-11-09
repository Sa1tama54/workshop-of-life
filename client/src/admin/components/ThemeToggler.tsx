import { useTheme } from 'react-admin';
import { Button } from '@mui/material';
import { darkTheme, lightTheme } from 'admin/theme';

export const ThemeToggler = () => {
  const [customeTheme, setCustomTheme] = useTheme();

  return (
    <Button
      onClick={() => setCustomTheme(customeTheme.palette?.mode === 'dark' ? lightTheme : darkTheme)}
      sx={{ color: '#fff' }}
    >
      {customeTheme.palette?.mode === 'dark' ? 'Светлая тема' : 'Темная тема'}
    </Button>
  );
};
