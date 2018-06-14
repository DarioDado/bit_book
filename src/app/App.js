
import React, { Fragment, Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { FeedPage } from './FeedPage';
import './App.css';
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';
import { NewPost } from './posts/newPost/NewPost';
import { SinglePostPage } from './SinglePostPage';





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
          <Route path="/posts/new" component={NewPost} />
        </Switch>
        </main>
        <Footer />
      </Fragment>
    );
  }

}

export default App;
