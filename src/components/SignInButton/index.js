import { FaSignInAlt } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { GiOverkill } from 'react-icons/gi';

import styles from './styles.module.scss';


export function SignInButton() {
  const isUserLoggedIn = true;

  return (
    isUserLoggedIn ? (
      <button type="button" className={styles.button}>
        <GiOverkill color='#04d399'/>
        Elves Brito
        <FiX color='#737380' className={styles.closeIcon}/>
      </button>
    ) : (
      <button type="button" className={styles.button}>
        <FaSignInAlt color='#f99999'/>
        Sign In
      </button>
    )
  );
};