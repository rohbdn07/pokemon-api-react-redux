import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import GetPokemonList from "../actions/PokemonListAction";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data.map((pokemon) => {
            const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
            return (
              <div className={"pokemon-item"}>
                <p>{name}</p>

                <Link to={`/pokemon/${name}`}>Show More</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.loading) {
      return <p>loading...</p>;
    }

    if (pokemonList.errMessage !== "") {
      return <p>{pokemonList.errMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return <div>{ShowData()}</div>;
};
export default PokemonList;
