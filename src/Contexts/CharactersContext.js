import { createContext, useEffect, useState } from 'react';
import api from '../services/api';


export const CharactersContext = createContext([]);

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      (async () => {
        const response = await api.get('/characters');
        setCharacters(response.data.data.results);
      })()
    }, []);

    return (
      <CharactersContext.Provider value={characters}>
        { children }
      </CharactersContext.Provider>
    );
};