import React, { Component } from 'react';



class Contenedor extends Component {
  constructor(props){
    super(props);
    this.state = {
      precio : props.Initialprecio
    }
    //this.precio = props.precio
  }

  aumentaPrecio(){
    this.setState({
      precio : this.state.precio += this.props.Initialprecio
    })
    /*this.precio * 1.5
    console.log(this.precio * 1.5);*/
  }

  render() {
    console.log(this.props);
    return (
      <div className="App-Contenedor">
        <h3>El celular es {this.props.celular}
        - con precio {this.state.precio}</h3>
      <h3> El objecto celular que recibo es:
        {this.props.oBJcelular.nombre}</h3>
      <h2>Los precios son:</h2>
      <ul>
         {this.props.oBJcelular.precios.map((precio,i) =>
           <li key={i}> {i+1} - {precio}</li>
         )}
      </ul>
      <button onClick={this.aumentaPrecio.bind(this)}>aumenta</button>
      </div>
    );
  }
}
export default Contenedor;
