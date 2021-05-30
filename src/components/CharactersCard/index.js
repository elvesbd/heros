import { useContext } from "react";
import { CharactersContext } from "../../Contexts/CharactersContext";


import styles from './styles.module.scss';


export function CharactersCard() {
  const characters = useContext(CharactersContext);
  console.log(characters)

  return (
    <div className={styles.charactersCardList}>
      {characters.map(character => (
        <div key={character.id} className={styles.characterCard}>
          <div className={styles.imageCard}>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}/>
          </div>

          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
};