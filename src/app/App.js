import React, { Fragment, Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';
import { NewPost } from './posts/newPost/NewPost';
import { OptionsSidebar } from './posts/OptionsSidebar';

class App extends Component {

  componentDidMount() {
    M.AutoInit()
  }

  render() {

    return (
      <Fragment>
        <Header />
        <main className='container'>
          <Route path="/posts/new" component={NewPost} />
          <Route exact path="/feed" component={OptionsSidebar} />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
