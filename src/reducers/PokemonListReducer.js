const initialState = {
  loading: false,
  data: [],
  errMessage: "",
};

const PokemonListReducer = (state = initialState, action) => {
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
        data: action.payload,
        error: "",
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
