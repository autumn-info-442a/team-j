import '../App.css';
import React from 'react';
import Test from './stacked_bar_chart.js'
import StackedChart from './stacked_lending.js'
import CountrySpending from './countrySpending';
import Chart from './wordcloud.js'

function economics() {
    return(
     <div>
        <div id='chartdiv'>
          <Test />
        </div>
        <div id ='stacked_lending'>
          <StackedChart />
        </div>
        <div><CountrySpending></CountrySpending></div>
        <div id='word_cloud'>
          <Chart />
        </div>
     </div>
    );
}

export default economics;