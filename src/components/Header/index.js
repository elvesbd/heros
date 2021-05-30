//import { SignInButton } from '../SignInButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { SocialNetworks } from '../SocialNetworks';

import styles from './styles.module.scss';

export function Header() {
const [active, setActive] = useState(true);

function handleClick() {
  setActive(false);
}

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Marvel"/>

        <nav>
          <Link 
            to="/"
            onClick={handleClick}
            className={active === true ? styles.active : ''}
          >
            Home
          </Link>
          <Link 
            to="/characters" 
            onClick={handleClick}
            className={active === false ? styles.active : ''}
          >
            Characters
          </Link>
        </nav>

        <SocialNetworks />
      </div>
  </header>
  );
};