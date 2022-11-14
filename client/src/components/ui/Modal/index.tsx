import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './Modal.module.scss';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={styles.buttonModal}>
        Оставить заявку
      </Button>
      <Dialog open={open} onClose={handleClose} className={styles.from}>
        <p className={styles.closeWindow} onClick={handleClose}>
          ❌
        </p>
        <DialogTitle className={styles.application}>Заявка</DialogTitle>
        <DialogContent>
          <TextField
            className={styles.formInput}
            autoFocus
            margin="dense"
            id="name"
            label="Имя и фамилия"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="+7 (800)-555-35-35"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Опишите вашу проблему"
            type="text"
            fullWidth
            // variant="standard"
          />
          <DialogTitle className={styles.servicesName}>
            Услуга: Название выбранной услуги
          </DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button className={styles.btn}> Отправить</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
