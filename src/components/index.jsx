import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Tools from './Tools';
import MainCanvas from './MainCanvas';
import FramesPreview from './FramesPreview';
import Header from './Header';
import FramesControl from './FramesControl';
import LandingPage from './LandingPage';
import Settings from './Settings';
import './index.scss';

function App() {
  const store = useSelector((store) => store);

  useEffect(() => {
    window.onunload = () => {
      const jsonState = JSON.stringify(store);
      localStorage.setItem('state', jsonState);
    };
  });

  return (

    <Router>
      <Switch>
        <Route path="/create-sprite">
          <>
            <Header />
            <div className="app-main">
              <Tools />
              <FramesControl />
              <MainCanvas />
              <FramesPreview />
              <Settings />
            </div>
          </>
        </Route>
        <Route path="/">
          <Header />
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
