import React from 'react';
import styles from './ClientsPics.module.scss';
import Image from 'next/image';

import pic1 from 'assets/images/pic1.png';
import pic2 from 'assets/images/pic2.png';
import pic3 from 'assets/images/pic3.png';
import pic4 from 'assets/images/pic4.png';

import arrowLeft from 'assets/arrowLeft.svg';
import arrowRight from 'assets/arrowRight.svg';
import search from 'assets/search.svg';

const ClientsPics = () => {
  return (
    <React.Fragment>
      <div className={styles.pics}>
        <div className={styles.arrow}>
          <Image src={arrowLeft} alt="arrow" />
        </div>
        <Image src={pic1} alt="pic1" />
        <Image src={pic2} alt="pic2" />
        <Image src={pic3} alt="pic3" />
        <Image src={pic4} alt="pic4" />
        <div className={styles.arrow}>
          <Image src={arrowRight} alt="arrow" />
        </div>
      </div>

      <div className={styles.help}>
        <div className={styles.searchSvg}>
          <Image src={search} alt="search" />
        </div>
        <p>Для увеличения картинки нажмите на изображение</p>
      </div>
    </React.Fragment>
  );
};

export default ClientsPics;
