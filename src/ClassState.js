import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super();
        this.state ={
            error:false,
        };
    }
  render() {
    return (
      <div>
        <h3>Eliminar {this.props.name}</h3>
        <p>Por favor, escriba el código de seguridad.</p>
      {this.state.error &&(<p>Error: el codigo es incorrecto</p>)}

        <input type='text' placeholder='código de seguridad'/>
        <button
            onClick={()=>this.setState({error: !this.state.error})}
        >
            Comprobar</button>
      </div>
    )
  }
}