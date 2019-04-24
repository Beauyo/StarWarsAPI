import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Planets from './component/Planets'
import People from './component/People'

function App() {
  return (
    <>
    <Switch>
        <Route exact path='/Planets' component={Planets} />
        <Route exact path='/People' component={People} />
    </Switch>
    </>
  );
}

export default App;
