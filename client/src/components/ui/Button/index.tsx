import * as React from 'react';
import Button from '@mui/material/Button';

export default function AppButton() {
  return (
    <Button
      sx={{ width: 200, height: 50 }}
      variant="contained"
      color="primary"
      style={{ backgroundColor: '#AC0000' }}
    >
      Оставить заявку
    </Button>
  );
}
