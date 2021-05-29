import { CharactersProvider } from "./Contexts/CharactersContext";

import {Characters} from './components/Characters';

function App() {
  return (
    <CharactersProvider>
      <Characters />
    </CharactersProvider>
  );
}

export default App;
