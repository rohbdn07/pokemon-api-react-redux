import { combineReducers } from "redux";
import PokemonListReducer from "./PokemonListReducer";
import PokemonViewReducer from "./PokemonViewReducer";

const rootReducer = combineReducers({
  PokemonList: PokemonListReducer,
  pokemon: PokemonViewReducer,
});

export default rootReducer;
