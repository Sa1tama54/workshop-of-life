import * as React from 'react';
import Button from '@mui/material/Button';

interface AppButtonProps extends React.PropsWithChildren {
  handleOpen: () => void;
}

const AppButton = ({ children, handleOpen }: AppButtonProps) => {
  return (
    <Button
      onClick={handleOpen}
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
