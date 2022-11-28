import Image from 'next/image';
import React from 'react';
import img from 'assets/images/no-results.png';

const NotFoundItems = () => {
  return (
    <section
      style={{ minHeight: '100vh', textAlign: 'center', margin: 'auto' }}
      data-aos="fade-left"
    >
      <h1 style={{ marginBottom: 20 }}>К сожалению не найдено ничего, что соотвествует запросу.</h1>
      <p style={{ marginBottom: 30 }}>
        Проверьте правильность введенного запроса и попробуйте вновь.
      </p>
      <Image src={img} width={250} height={250} alt="not-results-img" />
    </section>
  );
};

export default NotFoundItems;
