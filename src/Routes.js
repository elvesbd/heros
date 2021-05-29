import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Characters from './pages/CharactersPage';
import Home from './pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/characters" component={Characters}/>
      </Switch>
    </BrowserRouter>
  );
};