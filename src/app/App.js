
import React, { Fragment, Component } from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import { FeedPage } from './FeedPage';
import './App.css';
import { Route } from "react-router-dom";
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';
import { NewPost } from './posts/newPost/NewPost';





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
          <Route path="/posts/new" component={NewPost} />
        </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }

}

export default App;
