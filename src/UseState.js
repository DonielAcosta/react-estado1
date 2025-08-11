import React, { useState } from 'react'

export default function UseState({name}) {

    const [error,setError] = useState(true);
  return (
    <div>
      <h3>Eliminar {name}</h3>
      <p>Por favor, escriba el código de seguridad.</p>
      {error &&(<p>Error: el codigo es incorrecto</p>)}
      <input type='text' placeholder='código de seguridad'/>
      <button
        onClick={() => setError(!error)}
      >Comprobar</button>
    </div>
  )
}