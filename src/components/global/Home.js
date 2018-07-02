import React, { Component } from 'react';
import './css/Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre:'Rafa',
      count : 0
    };
  }
  componentDidMount(){
    console.log("montado");
  }
  ejecutaClick(){
    console.log("boton presionado");
    this.setState((prevState) => {
      return {count:prevState.count + 1}
    });
  }
  render() {
    //var nombre = 'Rafa';
    var nombre = this.state.nombre;

    return (
      <div className="App-Home">
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <h1> Oye sicierto {93+2+3} </h1>
      <button onClick={()=>this.ejecutaClick()}>presiona</button>
      <h1> presionado {this.state.count} veces </h1>
      </div>
    );
  }
}
export default Home;
