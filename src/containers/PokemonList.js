import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import GetPokemonList from "../actions/PokemonListAction";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };

  const ShowData = () => {
    if (pokemonList.loading) {
      console.log(pokemonList);
      return <p>loading...</p>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className={"list-wrapper"}>
          {pokemonList.data.map((item) => {
            return (
              <div className={"pokemon-item"}>
                <p>{item.name}</p>

                <Link to={`/pokemon/${item.name}`}>Show More</Link>
              </div>
            );
          })}
        </div>
      );
    }

    if (pokemonList.errMessage !== "") {
      return <p>{pokemonList.errMessage}</p>;
    }
    return <p>Unable to get data</p>;
  };
  return (
    <div>
      <div className={"search-wrapper"}>
        <p>Search:</p>
        <input type='text' onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          Search
        </button>
      </div>
      {ShowData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};
export default PokemonList;
