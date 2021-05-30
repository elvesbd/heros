import { FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';

import styles from './styles.module.scss';


export function SocialNetworks() {
  return (
    <div type="button" className={styles.buttonIcons}>
      <a href="https://www.instagram.com/marvel" rel="noreferrer" target="_blank">
        <FaInstagram />
      </a>

      <a href="https://www.facebook.com/MarvelBR"  rel="noreferrer" target="_blank">
        <FaFacebookSquare />
      </a>

      <a href="https://www.youtube.com/channel/UCItRs-h8YU1wRRfP637614w"  
        rel="noreferrer" 
        target="_blank"
      >
        <FaYoutube />
      </a>
    </div>
  );
};