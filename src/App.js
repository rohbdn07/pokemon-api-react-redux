import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";
import SearchAppBar from "./containers/SearchAppBar";

function App() {
  return (
    <div className='App'>
      <SearchAppBar />
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        <Route exact path={"/Pokemon/:pokemon"} component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
