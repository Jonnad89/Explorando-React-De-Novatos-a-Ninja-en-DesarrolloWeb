import React, { useState } from "react";
import pokemon from "../pokemon.json";
const PokemonCard = () => {
  const [index, setIndex] = useState(0);

  const random = Math.floor(Math.random()* pokemon.length)

  const next = () => {
    setIndex(index + 1);
  };
  const prev = () => {
    setIndex(index - 1);
  };

  const changeRandom = () => setIndex(random);
    console.log(pokemon);

    const first = () => setIndex(0);
  return (
    <div className="poke-card">
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
      {index > 0 && <button onClick={prev}>Prev</button>}
      {index < pokemon.length -1 && <button onClick={next}>Next</button>}
      <button onClick={changeRandom}>Change Pokemon Random</button>
      <button onClick={first}>First Pokemon</button>
    </div>
  );
};

export default PokemonCard;
