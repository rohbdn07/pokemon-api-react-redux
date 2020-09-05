const InitialState = {
  loading: false,
  data: {},
  errMessage: "",
};

const PokemonViewReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "POKEMON_VIEW_LOADING":
      return {
        ...state,
        loading: true,
        errMessage: "",
      };
    case "POKEMON_VIEW_SUCCESS":
      return {
        ...state,
        loading: false,
        errMessage: "",
        data: action.payload.results,
      };
    case "POKEMON_VIEW_ERROR":
      return {
        ...state,
        loading: false,
        errMessage: "unable to fatch from server",
      };

    default:
      return state;
  }
};

export default PokemonViewReducer;
