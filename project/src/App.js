import './App.css';
import React from 'react';
import Nav from './components/Nav'; 
import Health from './components/health';
import Economics from './components/economics';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{

render() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            {/* health */}
            <Route path = "/team-j" exact component={Health} />
            <Route path = "/team-j/health" component={Health} />
            {/* economic */}
            <Route path = "/team-j/economics" component={Economics} />
          </Switch>  
        </div>
    </div>
    </Router>
  ); 
}
}


export default App;