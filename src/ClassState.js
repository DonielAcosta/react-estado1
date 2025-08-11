import React, { Component } from 'react'
import Loading from './Loading';

export default class ClassState extends Component {
    constructor(){
        super();
        this.state ={
            error:true,
            loading:false
        };
    }
    // componentWilMount(){
    // UNSAFE_componentWillMount(){

    //   console.log("componentWilMount")
    // }
    componentDidUpdate() {
      console.log("El componente se ha actualizado.");

      if(!!this.setState.loading){

        setTimeout(() =>{
        console.log("Iniciando Validacion");
        this.setState({loading:false})
        console.log("Terminamos Validacion");
        },3000)
    }
    }
    
    // componentWillUnmount(){
    //   console.log("componentWillUnmount")

    // }

  render() {
    return (
      <div>
        <h3>Eliminar {this.props.name}</h3>
        <p>Por favor, escriba el código de seguridad.</p>
        {this.state.error &&(<p>Error: el codigo es incorrecto</p>)}
        {this.state.loading &&(<Loading/>)}

        <input type='text' placeholder='código de seguridad'/>
        <button
            onClick={()=>this.setState({loading:true})}
        >
            Comprobar</button>
      </div>
    )
  }
}