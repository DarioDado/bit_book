import React, { Fragment, Component } from 'react';
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
          <h1>Nothing in feed</h1>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
