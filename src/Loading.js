import React, { Component } from 'react'

export default class Loading extends Component {
    componentWillUnmount(){
      console.log("componentWillUnmount")

    }
  render() {
    return (
      <div>
       <p>Cargando...</p>
      </div>
    )
  }
}