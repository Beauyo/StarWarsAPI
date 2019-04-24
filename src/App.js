import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import PlanetShow from './component/PlanetShow'
import People from './component/People'
import Planets from './component/Planets'

function App() {
  return (
    <>
    <Switch>
        <Route exact path='/Planets' component={Planets} />
        <Route exact path='/People' component={People} />
        <Route exact path="/Planets/:id" render={() => <PlanetShow />} />
    </Switch>
    </>
  );
}

export default App;
