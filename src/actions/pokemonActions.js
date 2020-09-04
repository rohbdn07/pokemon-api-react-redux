import axios from "axios";

export const GetPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_LIST_LOADING",
    });
    const perPage = 20;
    const offset = page * perPage - perPage;
    const res = await axios.get(
      url`https://pokeapi.co/api/v2/pokemon?offset=${perPage}&limit=${offset}`
    );

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: res.data,
    });
    console.log(payload);
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_ERROR",
    });
  }
};
