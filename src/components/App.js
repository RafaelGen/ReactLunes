import React, { Component } from 'react';
import Header from './global/Header';
import Home from './global/Home';
import Footer from './global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
