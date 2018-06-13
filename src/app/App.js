import React, { Fragment, Component } from 'react';
import './App.css';
import { Header } from './partials/Header';
import M from 'materialize-css'
import { Footer } from './partials/Footer';
import { NewPost } from './posts/NewPost';
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
          {/* <NewPost /> */}
          <OptionsSidebar />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
