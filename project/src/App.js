import './App.css';
import React, {Component} from 'react';
import Nav from './components/Nav'; 
import Health from './components/health';
import Economics from './components/economics';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
  }


render() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            {/* health */}
            <Route path = "/" exact component={Health} />
            <Route path = "/health" component={Health} />
            {/* economic */}
            <Route path = "/economics" component={Economics} />
          </Switch>  
        </div>
    </div>
    </Router>
  ); 
}
}


export default App;