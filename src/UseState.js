import React, { useState,useEffect } from 'react'

const SECURITY_CODE ='paradigma';

export default function UseState({name}) {

    const [error,setError] = useState(false);
    const [loading,setloading] = useState(false);
    const [value,setValue] = useState('');

    console.log(value);
    useEffect(() => {
        console.log("empezamos el efecto");
        if(!!loading){

            setTimeout(() =>{
              console.log("Iniciando Validacion");
              if(value=== SECURITY_CODE){
                setloading(false)
              }else{
                setError(true);
                setloading(false)

              }
              console.log("Terminamos Validacion");
            },3000)
        }
        console.log("Terminamos el efecto");

    }, [loading]);
  return (
    <div>
      <h3>Eliminar {name}</h3>
      <p>Por favor, escriba el código de seguridad.</p>
      
      {(error && !loading) &&(<p>Error: el codigo es incorrecto</p>)}


      {loading && (<p>Cargando...</p>)}

      <input 
        type='text'
        placeholder='código de seguridad'
        value={value}
        onChange={ (event) =>{
          // setError(false);
          setValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // setError(false)  //aqui va 
          setloading(true)
        }}
      >Comprobar</button>
    </div>
  )
}