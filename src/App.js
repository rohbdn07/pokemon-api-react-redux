import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import PokemonView from "./containers/PokemonView";

function App() {
  return (
    <div className='App'>
      <div className='app'>
        <nav>
          <NavLink to={"/pokemon"}>Search</NavLink>
        </nav>
      </div>
      <Switch>
        <Route exact path={"/"} component={PokemonList} />
        <Route exact path={"/Pokemon/:pokemon"} component={PokemonView} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
