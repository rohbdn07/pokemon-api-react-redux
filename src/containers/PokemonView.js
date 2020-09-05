import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GetPokemonView from "../actions/PokemonViewAction";
import _ from "lodash";

const PokemonView = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.PokemonView);

  useEffect(() => {
    dispatch(GetPokemonView(pokemonName));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];

      return (
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt='pokemon_image' />
            <img src={pokeData.sprites.back_default} alt='pokemon_image' />
            <img src={pokeData.sprites.front_shiny} alt='pokemon_image' />
            <img src={pokeData.sprites.back_shiny} alt='pokemon_image' />
          </div>
          <div className='item'>
            <h1>Stats</h1>
            {pokeData.stats.map((item) => {
              return (
                <p>
                  {item.stat.name} {item.base_stat}
                </p>
              );
            })}
          </div>

          <div className='item'>
            <h1>Abilities</h1>
            {pokeData.abilities.map((item) => {
              return <p>{item.ability.name}</p>;
            })}
          </div>

          <div className='item'>
            <h1>Types</h1>
            {pokeData.types.map((item) => {
              return <p>{item.type.name}</p>;
            })}
          </div>
        </div>
      );
    }

    if (pokemonState.loading) {
      return <p>loading...</p>;
    }

    if (pokemonState.errMessage !== "") {
      return <p>{pokemonState.errMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };

  return (
    <div className={"poke"}>
      <h1>{pokemonName}</h1>
      {ShowData()}
    </div>
  );
};
export default PokemonView;
