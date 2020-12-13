import '../App.css';
import React from 'react';
import Test from './stacked_bar_chart.js'
import StackedChart from './stacked_lending.js'
import CountrySpending from './countrySpending';
import Chart from './wordcloud.js'
import bootstrap from 'bootstrap';


function economics() {
    return(
     <div>
       <div class="container">
          <div id='chartdiv'>
            <Test />
          </div>
          <div id ='stacked_lending'>
            <StackedChart />
          </div>
          <div className="viz">
            <CountrySpending />
          </div>
          <div id='word_cloud' className="viz">
            <Chart />
          </div>
        </div>
     </div>
    );
}

export default economics;