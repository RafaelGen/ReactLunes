import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';


class Header extends Component {
  //aqui van métodos
  render() {
    //variables
    return (
      //este es un comentario
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}
export default Header;
