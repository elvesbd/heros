//import { SignInButton } from '../SignInButton';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';


export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Marvel"/>

        <nav>
          <Link 
            to="/" 
            className={styles.active}
          >
            Home
          </Link>
          <Link 
            to="/characters" 
            className={styles.active}
          >
            Characters
          </Link>
        </nav>        
      </div>
  </header>
  );
};