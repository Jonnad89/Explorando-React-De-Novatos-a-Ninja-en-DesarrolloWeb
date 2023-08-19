import React from 'react'
import ChildComponent from './ChildComponent'
const ParentComponent = () => {
    const mensajeMagico = "Hola desde el padre"

    const objetoMagico = {
      nombre: "Harry Potter",
      casa: "Griffindor",
      hechizoFavorito: "Expeliarmus"
    }
  return (
    <div>
      <h1> Componente Padre</h1>
      <ChildComponent datos={objetoMagico}/>
      </div>
  )
}

export default ParentComponent