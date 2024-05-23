import React from 'react'

const Technologies = ({tech1, tech2, tech3}) => {
  return (
    <div className="card card-technologies">
    <h2>Mis Tecnologías</h2>
    <ul className="card-list">
      <li><b>Tech1:</b> {tech1}</li>
      <li><b>Tech2:</b> {tech2}</li>
      <li><b>Tech3:</b> {tech3}</li>
    </ul>
  </div>
  )
}

export default Technologies
