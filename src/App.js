import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home/home'
import { Contact } from './pages/Contact/contact'
const About = React.lazy(() => import('./pages/About/about'));

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/nosotros">
          <Suspense fallback={null}>
            <About />
          </Suspense>
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
