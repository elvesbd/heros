import { Star, Clock } from 'react-feather';

import { useContext } from "react";
import { CharactersContext } from "../../Contexts/CharactersContext";


import styles from './styles.module.scss';


export function CharacterCard() {
  const characters = useContext(CharactersContext);
  console.log(characters)

  return (
    <div className={styles.movieCard}>
      <div>
        <div className={styles.movieInfo}>
          <span>Algum titulo</span>
          <div className={styles.meta}>
            <div>
              <Star /> 
            </div>

            <div>
              <Clock /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};