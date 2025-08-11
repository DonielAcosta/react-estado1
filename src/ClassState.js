import React, { Component } from 'react'
import Loading from './Loading';

const SECURITY_CODE ='paradigma';

export default class ClassState extends Component {
    constructor(){
        super();
        this.state ={
          value:'',
            error:false,
            loading:false
        };
    }
  
    componentDidUpdate() {
      console.log("El componente se ha actualizado.");

      if(!!this.setState.loading){

        setTimeout(() =>{
        console.log("Iniciando Validacion");

        if(SECURITY_CODE === this.setState.value){
          this.setState({error:false,loading:false});
        }else{
          this.setState({error:true,loading:false});
        }
        console.log("Terminamos Validacion");
        },3000)
      }
    }


  render() {
    return (
      <div>
        <h3>Eliminar {this.props.name}</h3>
        <p>Por favor, escriba el código de seguridad.</p>
        {(this.state.error && !this.state.loading) &&(<p>Error: el codigo es incorrecto</p>)}
        {this.state.loading &&(<Loading/>)}

        <input 
          type='text' 
          placeholder='código de seguridad'
          value={this.setState.value}
          onChange={(event) =>{
            this.setState({value:event.target.value})
          }}
          />
        <button
            onClick={()=>this.setState({loading:true})}
        >
            Comprobar</button>
      </div>
    )
  }
}