import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Help from './Help';
import NotFound from './NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
