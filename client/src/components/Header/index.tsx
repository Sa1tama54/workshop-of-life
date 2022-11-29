import Link from 'next/link';

import styles from 'components/Header/Header.module.scss';
import { useRouter } from 'next/router';

const navLinks = [
  { title: 'Главная', path: '/' },
  { title: 'Услуги', path: '/services' },
  { title: 'Каталог товаров', path: '/products' },
  { title: 'Вакансии', path: '/vacancies' },
  { title: 'Галерея', path: '/photos' },
  { title: 'Отзывы', path: '/reviews' },
];

const Header = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo} data-aos="fade-right">
          <svg
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M15.0571 0.5H0L15.9429 23L0 45.5H15.0571L31 23L15.0571 0.5Z"
              fill="#FED84C"
            />
            <path
              d="M29.0571 0.5H14L29.9429 23L14 45.5H29.0571L45 23L29.0571 0.5Z"
              fill="#FED84C"
            />
          </svg>
          <h1>Мастерская быта</h1>
        </div>
        <nav className={styles.navbar} data-aos="fade-down">
          <ul>
            {navLinks.map(({ path, title }) => (
              <li key={path} className={router.asPath === path ? styles.activeLink : ''}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <div className={styles.hamburgerLines}>
          <span className={styles.lineOne}></span>
          <span className={styles.lineTwo}></span>
          <span className={styles.lineThree}></span>
        </div>
        <nav className={styles.menu}>
          <ul>
            {navLinks.map(({ path, title }) => (
              <li className={router.asPath === path ? styles.activeLink : ''} key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <div className={styles.headerInfo} data-aos="fade-left">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="white" />
            <path
              d="M22.4333 19.6334C21.9635 19.1696 21.377 19.1696 20.9101 19.6334C20.554 19.9865 20.1979 20.3396 19.8478 20.6987C19.752 20.7975 19.6712 20.8184 19.5545 20.7526C19.3241 20.6269 19.0787 20.5252 18.8572 20.3875C17.8248 19.7381 16.96 18.9032 16.1939 17.9636C15.8138 17.4968 15.4757 16.997 15.2392 16.4344C15.1914 16.3207 15.2003 16.2459 15.2931 16.1532C15.6492 15.809 15.9964 15.4559 16.3465 15.1028C16.8343 14.612 16.8343 14.0375 16.3435 13.5437C16.0652 13.2624 15.7869 12.9871 15.5086 12.7058C15.2213 12.4185 14.937 12.1283 14.6467 11.844C14.1769 11.3861 13.5903 11.3861 13.1235 11.847C12.7644 12.2001 12.4203 12.5622 12.0552 12.9093C11.717 13.2295 11.5464 13.6215 11.5105 14.0794C11.4537 14.8245 11.6362 15.5277 11.8936 16.213C12.4203 17.6314 13.2223 18.8913 14.1948 20.0464C15.5086 21.6084 17.0767 22.8443 18.9111 23.7361C19.7371 24.1371 20.5929 24.4453 21.5236 24.4962C22.164 24.5321 22.7206 24.3705 23.1665 23.8708C23.4718 23.5296 23.8159 23.2184 24.1391 22.8922C24.6179 22.4074 24.6209 21.8209 24.1451 21.3421C23.5765 20.7705 23.0049 20.202 22.4333 19.6334Z"
              fill="#2E363E"
            />
          </svg>
          <div>
            <h2>8 (800) 000-00-00</h2>
            <p>Ежедневно с 9:00 до 20:00</p>
          </div>
        </div> */}
      </header>
    </div>
  );
};

export default Header;
