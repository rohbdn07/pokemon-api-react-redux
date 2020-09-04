const InitialState = {
  loading: false,
  data: [],
  errMessage: "",
  count: 0,
};

const PokemonListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errMessage: "",
        count: action.payload.count,
      };
    case "POKEMON_LIST_ERROR":
      return {
        ...state,
        loading: false,
        errMessage: "unable to fatch from server",
      };

    default:
      return state;
  }
};

export default PokemonListReducer;
