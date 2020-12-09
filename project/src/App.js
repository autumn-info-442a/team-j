import './App.css';
import React, {Component} from 'react';
import Chart from './components/wordcloud.js'
import Test from './components/stacked_bar_chart.js'
import StackedChart from './components/stacked_lending.js'
import DiscreteSlider from './components/slider.js'
import Mortality from './components/mortality';
import CountrySpending from './components/countrySpending';
import Condition from './components/condition';

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
        <div id='chartdiv'>
          <Test />
        </div>
        <div id ='stacked_lending'>
          <StackedChart />
        </div>
        <div><Mortality></Mortality></div>
        <div><CountrySpending></CountrySpending></div>
        <div><Condition></Condition></div>
    </div>
  );
}
}

export default App;