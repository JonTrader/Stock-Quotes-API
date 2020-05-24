import React from 'react';
import Home from './Components/JS/Home.js';
import Stocks from './Components/JS/Stocks.js'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
        <div>
            <Router>
                <Switch>Home
                    <Route path="/" exact component={Home}/>
                    <Route path="/quotes" exact component={Stocks}/>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
