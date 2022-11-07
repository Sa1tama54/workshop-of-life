import React, { FC } from 'react';
import styles from './Heading.module.scss';
interface HeadingProps {
  children?: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <React.Fragment>
      <h1 className={styles.headTitle}>{children}</h1>
      <hr className={styles.hr} />
    </React.Fragment>
  );
};

export default Heading;
