/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react'

const SECURITY_CODE ='paradigma';

export default function UseState({name}) {
    const [state,setState] = useState({
      value:'',
      error:false,
      loading:false,
      deleted:false,
      confirm:false,
    });

    // const [error,setError] = useState(false);
    // const [loading,setloading] = useState(false);
    // const [value,setValue] = useState('');

    // console.log(state.value);
    const onConfirm = () => {
      setState({
        ...state,
        error:false,
        loading:false,
        confirm:true,

      })
    }

    const onError = () =>{
      setState({
        ...state,
        loading:false,
        error:true
      })

    }
    const onWrite = (newValue)=>{
      setState({ 
        ...state,
        value:newValue
      });
    }
    const onCheck = () =>{
      setState({
        ...state,
        loading:true
      })
    }
    const onDelete =() =>{
      setState({
        ...state,
        deleted:true
      })
    }
    const onReset =() =>{
      setState({
        ...state,
        confirm:false,
        deleted:false,
        value:''
      })
    }
    useEffect(() => {
        console.log("empezamos el efecto");
        if(!!state.loading){

            setTimeout(() =>{
              console.log("Iniciando Validacion");
              if(state.value=== SECURITY_CODE){
                onConfirm();
                // setState({
                //   ...state,
                //   error:false,
                //   loading:false,
                //   confirm:true
                // })
                // setloading(false)
              }else{

                onError();
                // setState({
                //   ...state,
                //   loading:false,
                //   error:true
                // })
                // setError(true);
                // setloading(false)

              }
              console.log("Terminamos Validacion");
            },3000)
        }
        console.log("Terminamos el efecto");

    }, [state.loading]);
    if(!state.deleted && !state.confirm){
      return (
        <div>
          <h3>Eliminar {name}</h3>
          <p>Por favor, escriba el código de seguridad.</p>
          
          {(state.error && !state.loading) &&(<p>Error: el codigo es incorrecto</p>)}
    
    
          {state.loading && (<p>Cargando...</p>)}
    
          <input 
            type='text'
            placeholder='código de seguridad'
            value={state.value}
            onChange={ (event) =>{

              onWrite(event.target.value);
            }}
          />
          <button
            onClick={() => {
              // setError(false)  //aqui va 
              // setState({
              //   ...state,
              //   loading:true
              // })
              onCheck();
              // setloading(true)
            }}
          >Comprobar</button>
        </div>
      )
    }else if(!!state.confirm && !state.deleted){
      return(
        <>
        <p>Pedimos confirmacio. Estas seguro?</p>
        <button
          onClick={() =>{
            onDelete();
          }}
        >
          SI, ELiminar
        </button>
        <button
          onClick={() =>
            // setState({
            //   ...state,
            //   confirm:false,
            //   value:''

            // })
            onReset()
          }
        >
          Nop, Me arrepenti
        </button>
        </>
      );
    }else{
      return(
        <>
        <p>Eliminado con Exito</p>
        <button
          onClick={() =>
            // setState({
            //   ...state,
            //   confirm:false,
            //   deleted:false,
            //   value:''
            // })
            onReset()
          }
        >
          Resetear, Volver atras
        </button>
        </>
      );
    }
}