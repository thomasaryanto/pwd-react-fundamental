import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import './bootstrap.css';
import './styles.css';

import CounterScreen from './views/screens/CounterScreen';
import InputScreen from './views/screens/InputScreen';
import LifecycleScreen from './views/screens/LifecycleScreen';
import HomeScreen from './views/screens/HomeScreen';
import RegisterScreen from './views/screens/RegisterScreen';
import LoginScreen from './views/screens/LoginScreen';

import PageNotFound from './views/screens/errors/PageNotFound';
import Navbar from './views/components/Navbar';
import ProfileScreen from './views/screens/ProfileScreen';

function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/counter" component={CounterScreen} />
        <Route exact path="/input" component={InputScreen} />
        <Route exact path="/lifecycle" component={LifecycleScreen} />
        <Route exact path="/profile/:username" component={ProfileScreen} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
