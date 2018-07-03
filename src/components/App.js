import React, { Component } from 'react';
import Header from './global/Header';
import Home from './global/Home';
import Footer from './global/Footer';
import Contenedor from './global/Contenedor';

class App extends Component {
  render() {
  var celular = {
      nombre : 'iPhone',
      precios : ['8000','19000','25000']
    }
    return (
      <div className="App">
        <Header titulo="Primer Titulo"/>
      {/*<Header titulo="Segundo Titulo"/>*/}
        <Home/>
        <Contenedor celular={"Xiaomi"} precio={3500} oBJcelular={celular} />
        <Footer/>
      </div>
    );
  }
}

export default App;
