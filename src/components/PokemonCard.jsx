import React, { useEffect, useState } from "react";
import pokemon from "../pokemon.json";
const PokemonCard = () => {
  const random = Math.floor(Math.random()* pokemon.length)
  const [index, setIndex] = useState(0);


  const next = () => {
    setIndex(index + 1);
  };
  const prev = () => {
    setIndex(index - 1);
  };

  const changeRandom = () => setIndex(random);
    // console.log(pokemon);

    const first = () => setIndex(0);

   const colors = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671","#ffc75f", "#f9f871"] 
   const randomColorIndex = Math.floor(Math.random() * colors.length)
   const color = colors[randomColorIndex]

   useEffect(() => {
     document.body.style = `background: ${color}`
     console.log("dentro del useEffect")
    },[color])

  return (
    <div className="poke-card" style={{color: color}}>
      <h1>{pokemon[index].name.english}</h1>
      <img src={pokemon[index].image.thumbnail} alt="" className="poke-img"/>
      <h2>
        Type:{pokemon[index].type[0]} {pokemon[index].type[1]}{" "}
      </h2>
      <p>
        Height: {pokemon[index].profile.height} Weight:{" "}
        {pokemon[index].profile.weight}
      </p>
      <p>
        Abilities: <br />
        1- {pokemon[index].profile?.ability[0][0]}{" "}
        {pokemon[index].profile.ability[1] && (
          <>2- {pokemon[index].profile.ability[1][0]}</>
        )}
      </p>
      {index > 0 && <button onClick={prev}><i className="fa-solid fa-backward"></i> Prev</button>}
      {index < pokemon.length -1 && <button onClick={next}>Next <i className="fa-solid fa-forward"></i></button>}
      <button onClick={changeRandom}>Change Pokemon Random <i className="fa-regular fa-lightbulb"></i></button>
      <button onClick={first}>First Pokemon <i className="fa-solid fa-rotate-left"></i></button>
    </div>
  );
};

export default PokemonCard;
