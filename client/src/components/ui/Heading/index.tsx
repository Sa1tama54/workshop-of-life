import React from 'react';
import Link from 'next/link';

import styles from './Heading.module.scss';
interface HeadingProps {
  children?: React.ReactNode;
  linkPath: string;
}

const Heading = ({ children, linkPath }: HeadingProps) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.headingBanner}>
        <h1 className={styles.headTitle} data-aos="fade-right">
          {children}
        </h1>
        <nav className={styles.breadcrumbs} data-aos="fade-left">
          <Link href="/">Главная</Link>
          <span> / </span>
          <Link href={linkPath}>{children}</Link>
        </nav>
      </section>
    </div>
  );
};

export default Heading;
