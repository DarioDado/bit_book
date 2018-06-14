
import React, { Fragment, Component } from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { FeedPage } from './FeedPage';
import './App.css';
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';


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
        </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }

}

export default App;
