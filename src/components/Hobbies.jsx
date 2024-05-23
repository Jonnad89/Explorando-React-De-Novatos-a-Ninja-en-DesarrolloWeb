import React from 'react';

const Hobbies = ({hobbie1, hobbie2, hobbie3}) => {
  return (
    <div className='card hobbies'>
      <h2>Hobbies</h2>
      <ul>
        <li>{hobbie1}</li>
        <li>{hobbie2}</li>
        <li>{hobbie3}</li>
      </ul>
    </div>
  );
}

export default Hobbies;
