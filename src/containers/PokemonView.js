import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonView = (props) => {
  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemon);
  console.log("pokemonName", pokemonName);
  return <div>pokemon</div>;
};
export default PokemonView;
