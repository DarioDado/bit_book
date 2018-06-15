
import React, { Fragment, Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { FeedPage } from './FeedPage';
import './App.css';
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';
import { SinglePostPage } from './SinglePostPage';
import { MyProfilePage } from './user/MyProfilePage';


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
