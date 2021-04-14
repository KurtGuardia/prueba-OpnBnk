import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import FirstView from './views/FirstView';
import SecondView from './views/SecondView';
import ThirdView from './views/ThirdView';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='App__main'>
        <Switch>
          <Route path='/final' component={ThirdView} />
          <Route path='/step2' component={SecondView} />
          <Route exact path='/' component={FirstView} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
