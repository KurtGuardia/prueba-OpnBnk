import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import FirstView from './views/FirstView';
import SecondView from './views/SecondView';
import ThirdView from './views/ThirdView';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <Header />
      <div className='App__main'>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path='/3' component={ThirdView} />
            <Route path='/2' component={SecondView} />
            <Route exact path='/' component={FirstView} />
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
