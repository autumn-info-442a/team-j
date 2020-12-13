import './App.css';
import React, {Component} from 'react';
import Nav from './components/Nav'; 
import health from './components/health';
import economics from './components/economics';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import bootstrap from 'bootstrap';

class App extends React.Component{
  constructor(props) {
    super(props);
  }


render() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <switch>
          {/* health */}
          <Route path = "/" exact component={health} />
          <Route path = "/health" component={health} />
          {/* economic */}
          <Route path = "/economics" component={economics} />
        </switch>  
    </div>
    </Router>
  ); 
}
}


export default App;