import { Link, useLocation } from 'react-router-dom';

import { SocialNetworks } from '../SocialNetworks';

import styles from './styles.module.scss';

export function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Marvel"/>

        <nav>
          <Link 
            to="/"
            className={pathname === '/' ? styles.active : ''}
          >
            Home
          </Link>
          <Link 
            to="/characters" 
            className={pathname === '/characters' ? styles.active : ''}
          >
            Characters
          </Link>
        </nav>

        <SocialNetworks />
      </div>
  </header>
  );
};