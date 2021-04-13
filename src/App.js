import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home/home'
import { Contact } from './pages/Contact/contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nosotros">
          <Contact />
        </Route>
        <Route path="/donaciones">
          <Contact />
        </Route>
        <Route path="/aliados">
          <Contact />
        </Route>
        <Route path="/contacto">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
