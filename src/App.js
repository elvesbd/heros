import { Header } from "./components/Header";
import { CharactersProvider } from "./Contexts/CharactersContext";

import {Routes} from './Routes';

import './styles/global.module.scss';

function App() {
  return (
    <CharactersProvider>
      <Header />
      <Routes />
    </CharactersProvider>
  );
}

export default App;
