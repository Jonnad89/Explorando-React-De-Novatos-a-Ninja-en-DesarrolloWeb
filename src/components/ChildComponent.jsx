import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h2>Componente Hijo</h2>
        <p>Nombre: {props.datos.nombre}</p>
        <p>Casa: {props.datos.casa}</p>
        <p>Hechizo Favorio: {props.datos.hechizoFavorito}</p>
    </div>
  )
}

export default ChildComponent