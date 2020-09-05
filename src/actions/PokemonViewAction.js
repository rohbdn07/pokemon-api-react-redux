import axios from "axios";

const GetPokemonView = (pokemon) => async (dispatch) => {
  try {
    dispatch({
      type: "POKEMON_VIEW_LOADING",
    });
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_VIEW_SUCCESS",
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_VIEW_ERROR",
    });
  }
};
export default GetPokemonView;
