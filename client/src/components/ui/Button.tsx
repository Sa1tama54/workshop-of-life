import * as React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  children?: string;
}

const AppButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Button
      sx={{ minWidth: 150, height: 50 }}
      variant="contained"
      color="primary"
      style={{ backgroundColor: '#AC0000' }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
