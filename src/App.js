import React from "react";
import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import PokemonView from "./containers/PokemonView";

function App() {
  return (
    <div className='App'>
      <div className='app_header'>
        <nav className={"header"}>
          <NavLink to={"/pokemon"}>
            <img
              className={"logo"}
              src='https://fontmeme.com/permalink/200905/0bafe643fec0056907ce5ff26156a3d6.png'
              alt='pokemonLogo'
            />
          </NavLink>
          <NavLink to={"/pokemon"}>
            <img
              className={"logo"}
              src='https://fontmeme.com/permalink/200905/45e2f1af4c06c7cac1fce58622ecdf4a.png'
              alt=''
            />
          </NavLink>
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
