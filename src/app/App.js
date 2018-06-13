import React, { Fragment } from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { FeedPage } from './FeedPage';
import './App.css';

const App = () => {
  return (
    <Fragment>
        <Switch>
          <Route exact path='/feed' component={FeedPage} />
        </Switch>
    </Fragment>
  );
}

export default App;
