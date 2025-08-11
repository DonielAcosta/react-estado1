import React, { useState,useEffect } from 'react'

export default function UseState({name}) {

    const [error,setError] = useState(true);
    const [loading,setloading] = useState(false);
    useEffect(() => {
        console.log("empezamos el efecto");
        if(!!loading){

            setTimeout(() =>{
            console.log("Iniciando Validacion");
            setloading(false)
            console.log("Terminamos Validacion");
            },3000)
        }
        console.log("Terminamos el efecto");

    }, [loading]);
  return (
    <div>
      <h3>Eliminar {name}</h3>
      <p>Por favor, escriba el código de seguridad.</p>
      {error &&(<p>Error: el codigo es incorrecto</p>)}
      {loading && (<p>Cargando...</p>)}
      <input type='text' placeholder='código de seguridad'/>
      <button
        onClick={() => setloading(true)}
      >Comprobar</button>
    </div>
  )
}