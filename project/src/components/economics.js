import '../App.css';
import React from 'react';
import Test from './stacked_bar_chart.js'
import StackedChart from './stacked_lending.js'
import CountrySpending from './countrySpending';
import Chart from './wordcloud.js'

function Economics() {
    return(
     <div className="econ">
        <div id="chartdiv">
          <Test />
        </div>
        <div id="stacked_lending">
          <StackedChart />
        </div>
        <div id="country_spending">
          <CountrySpending></CountrySpending>
        </div>
        <div id="word_cloud">
          <Chart />
        </div>
     </div>
    );
}

export default Economics;