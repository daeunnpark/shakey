import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Logo from './components/Logo';
import Uploader from './components/Uploader';
import Zoom from './components/Zoom';
import Shake from './components/Shake';

function App() {
  return (
    <Router>
      <Switch>
            <Route path="/upload">
              <Uploader/>
            </Route>
            <Route path="/zoom">
              <Zoom />
            </Route>
            <Route path="/shake">
              <Shake />
            </Route>
            <Route path="/">
              <Logo />
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
