import { CharactersCard } from '../CharactersCard';

import styles from './styles.module.scss';


export function CharacterList() {
  
  return (
    <>
      <div className={styles.searchCharacter}>
        <input type="search" />
      </div>
      
      <CharactersCard />
    </>
  );
};