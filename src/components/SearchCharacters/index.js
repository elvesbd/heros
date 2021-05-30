import { useContext } from 'react';
import { Link } from 'react-router-dom';

import {CharactersContext} from '../../Contexts/CharactersContext';
import { CharactersCard } from '../CharactersCard';

import styles from './styles.module.scss';


export function SearchCharacters() {
  const characters = useContext(CharactersContext);

  return (
    <div className={styles.search}>
      <header className={styles.searchHeader}>
        <h1>Pesquise seus personagens</h1>
        <Link to="">Busca</Link>
      </header>

        <input type="search" className={styles.searchInput} placeholder="Pesquisar"/>

      {characters.map((character) => (
        <CharactersCard character={character} />
      ))}
    </div>
  );
};