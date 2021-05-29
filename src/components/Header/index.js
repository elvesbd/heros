//import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Marvel"/>

        <nav>
          <a className={styles.active}>Home</a>
          <a>Characters</a>
        </nav>

        
      </div>
    </header>
  );
};