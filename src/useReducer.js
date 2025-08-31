/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer } from 'react'

const SECURITY_CODE ='paradigma';

const UseReducer = ({name}) => {


    const [state,dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log("empezamos el efecto");
        if(!!state.loading){

            setTimeout(() =>{
              console.log("Iniciando Validacion");
              if(state.value=== SECURITY_CODE){
                dispatch({type:'CONFIRM'});
              }else{
                dispatch({type:'ERROR'});
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
                dispatch({type:'WRITE', payload: event.target.value});
            }}
          />
          <button
            onClick={() => {
                dispatch({type:'CHECK'});
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
            dispatch({type:'DELETE'});
          }}
        >
          SI, ELiminar
        </button>
        <button
          onClick={() =>
            dispatch({type:'RESET'})
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
            dispatch({type:'RESET'})
          }
        >
          Resetear, Volver atras
        </button>
        </>
      );
    }
}


/* eslint-disable default-case */
const initialState ={
    value:'paradigma',
    error:false,
    loading:false,
    deleted:false,
    confirm:false,
}

const reducerObject = (state,payload) => ({
    'ERRROR':{
        ...state,
        error:true,
        loading:false,
    },
    'CHECK':{
        ...state,
        loading:true,
    },
    'WRITE':{
        ...state,
        value: payload
    },
    'CONFIRM':{
        ...state,
        error:false,
        loading:false,
        confirm:true,
    },
    'DELETE':{
        ...state,
        deleted:true
    },
    'RESET':{
        ...state,
        confirm:false,
        deleted:false,
        value:''
    }
})

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state,action.payload)[action.type];
    }else{
        return state
    }
}

export {UseReducer}
