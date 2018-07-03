import React, { Component } from 'react';

class Opciones extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var opciones = this.props.options
    return (
      <div className="App-options">
        <ul>
          {opciones.map((option)=> <li>{option}</li>)}
        </ul>
        <button onClick={this.props.agregarOpcion}>
          agregar opciones</button>
      </div>
    );
  }
}
export default Opciones;
