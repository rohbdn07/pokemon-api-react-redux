import axios from "axios";

const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });

    const perPage = 20;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${perPage}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_ERROR",
    });
  }
};
export default GetPokemonList;
