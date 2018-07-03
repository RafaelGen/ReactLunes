import React, { Component } from 'react';

class Opciones extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let opciones = this.props.options
    return (
      <div className="App-options">
        <ul>
          {opciones.map((option,i)=> <li key={i}>{option}</li>)}
        </ul>
        <button onClick={this.props.onAddOpcion}>
          agregar opciones</button>
      </div>
    );
  }
}
export default Opciones;
