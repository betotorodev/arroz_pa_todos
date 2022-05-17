import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Layout from "./layout"
import { Home } from './pages/Home/home'
const About = React.lazy(() => import('./pages/About/about'));
// const Donations = React.lazy(() => import('./pages/Donations/donations'));
// const Partner = React.lazy(() => import('./pages/Partners/Partners'));
// const Contact = React.lazy(() => import('./pages/Contact/contact'));

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
          {/* <Route path="/donaciones">
            <Suspense fallback={null}>
              <Donations />
            </Suspense>
          </Route>
          <Route path="/aliados">
            <Suspense fallback={null}>
              <Partner />
            </Suspense>
          </Route>
          <Route path="/contacto">
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          </Route> */}
        </Switch>
      </Router>
  );
}

export default App;
