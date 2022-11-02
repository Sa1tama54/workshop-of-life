import { Button, Fade, Menu, MenuItem } from '@mui/material';
import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import styles from './Sort.module.scss';

const Sort = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState(0);
  const sortList = ['Сначала недорогие', 'Сначала дорогие'];

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickListItem = (i: number) => {
    setSelected(i);
    handleClose();
  };

  return (
    <div className={styles.sortWrapper}>
      <div className={styles.sortTitle}>
        <ArrowDropUpIcon />
        <b>Сортировка:</b>
      </div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuItem className={styles.sortActiveItem} onClick={handleClose}>
          {sortList[selected]}
        </MenuItem>
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {sortList.map((name, i) => (
          <MenuItem
            className={`${styles.sortItem} ${selected === i ? styles.active : ''}`}
            key={i}
            onClick={() => onClickListItem(i)}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Sort;
