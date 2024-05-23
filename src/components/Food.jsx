import React from 'react';

const Food = ({food1, food2, food3}) => {
  return (
    <div className="card card-food">
    <h2>Mis Comidas Favoritas</h2>
    <ul className="card-list">
      <li><b>Food1:</b> {food1}</li>
      <li><b>Food2:</b> {food2}</li>
      <li><b>Food3:</b> {food3}</li>
    </ul>
  </div>
  );
}

export default Food;
