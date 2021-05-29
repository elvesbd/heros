import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import md5 from 'md5';


export const CharactersContext = createContext([]);

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const publicKey = 'a4e21bb2dc85b749cfba2b9310910b6c';
  const privateKey = 'caab23674d64ea95dcf186f091de987312f8c0fb';
  const time = Number(new Date());

  const hash = md5(time + privateKey + publicKey);

    useEffect(() => {
      (async () => {
        const response = await api.get(`characters?ts=${time}&apikey=${publicKey}&hash=${hash}`);
        setCharacters(response.data.data.results);
      })()
    }, []);

    return (
      <CharactersContext.Provider value={characters}>
        { children }
      </CharactersContext.Provider>
    );
};