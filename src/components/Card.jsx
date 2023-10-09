import React from 'react'

const Card = (props) => {
    const { title, content } = props;
  return (
    <div className='card'>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Card