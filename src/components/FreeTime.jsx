import React from 'react';

const FreeTime = ({FT1, FT2, FT3}) => {
  return (
    <div className='card free-time'> 
    <h2>Free Time</h2>
      <ul>
        <li>{FT1}</li>
        <li>{FT2}</li>
        <li>{FT3}</li>
      </ul>
    </div>
  );
}

export default FreeTime;
