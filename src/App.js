import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./Home"
import AllBeers from "./AllBeers"
import RandomBeer from "./RandomBeer"
import NewBeer from "./NewBeer"

function App() {
  return (
    <div className="App">

    <Switch>

    <Route exact path="/" component={Home}/>
    <Route exact path="/random-beers" component={RandomBeer}/>
    <Route exact path="/all-beers" component={AllBeers}/>
    <Route exact path="/new-beers" component={NewBeer}/>

    </Switch>
     
    </div>
  );
}

export default App;
