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
        <div className="reference">
                <p>References</p>
                <ol>
                    <li>“Data Lab – The Federal Response to COVID-19 – U.S. Treasury.” Data Lab – The Federal Response to COVID-19 – U.S. Treasury | Data Lab, www.datalab.usaspending.gov/federal-covid-funding/.</li>
                    <li>“Coronavirus Bailouts: Which Country Has the Most Generous Deal?” BBC News, BBC, 7 May 2020, www.bbc.com/news/business-52450958.</li>
                    <li>“all_jobs_sum_job_loss_county.Csv.” Urban Data Catalog, 4 Sept. 2020, www.datacatalog.urban.org/dataset/estimated-low-income-jobs-lost-covid-19/resource/5a29a102-bd87-49c2-a09d-6a09bc73a561. </li>
                    <li>“industry_code_translation_list.” Urban Data Catalog, 15 Apr. 2020, www.datacatalog.urban.org/dataset/estimated-low-income-jobs-lost-covid-19/resource/cd4ef086-7401-4b63-9424-7881aa2be22d. </li>
                </ol>
            </div>
     </div>
    );
}

export default Economics;