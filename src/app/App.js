
import React, { Fragment, Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import M from 'materialize-css'

import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { FeedPage } from './FeedPage';
import { SinglePostPage } from './SinglePostPage';
import { MyProfilePage } from './user/MyProfilePage';
import { PeoplePage } from './PeoplePage';
import { UserProfilePage } from './UserProfilePage';


class App extends Component {

  componentDidMount() {
    M.AutoInit()
  }

  render() {

    return (
      <Fragment>
        <Header />
        <main className='container'>
          <Switch>
            <Route exact path='/feed' component={FeedPage} />
            <Route exact path='/users/:id' component={UserProfilePage} />
            <Route exact path='/people' component={PeoplePage} />
            <Route exact path='/feed/:type/:id' component={SinglePostPage} />
            <Route exact path='/profile' component={MyProfilePage} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }

}

export default App;
