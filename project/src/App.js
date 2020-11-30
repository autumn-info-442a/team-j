import './App.css';
import React, {Component} from 'react';
import Chart from './components/wordcloud.js'
import DiscreteSlider from './components/slider.js'

class App extends React.Component{
  constructor(props) {
    super(props);
  }


render() {
  return (
    <div className="App">
        <div id='word_cloud'>
          <Chart />
        </div>
        <div id='timeline_slider'>
          <DiscreteSlider />
        </div>
    </div>
  );
}
}

export default App;