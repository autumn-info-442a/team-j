import '../App.css';
import React from 'react';
import DiscreteSlider from './slider.js'
import Mortality from './mortality';
import Condition from './condition';

function Health() {
    return(
        <div className="health">
            <div id='timeline_slider'>
                <DiscreteSlider />
            </div>
            <div>
                <Mortality />
                <Condition />
            </div>
            <div className="reference">
                <p>References</p>
                <ol>
                    <li>World Health Organization. What We Know About Long-term Effects of COVID-19. September 2020, https://www.who.int/docs/default-source/coronaviruse/risk-comms-updates/update-36-long-term-symptoms.pdf?sfvrsn=5d3789a6_2#:~:text=%E2%80%A2%20Most%20people%20with%20COVID,have%20lasting%20health%20effects. PowerPoint Presentation.</li>
                    <li>“Provisional Death Counts for Coronavirus Disease (COVID-19): Distribution of Deaths by Race and Hispanic Origin.” Centers for Disease Control and Prevention, https://www.data.cdc.gov/NCHS/Provisional-Death-Counts-for-Coronavirus-Disease-C/pj7m-y5uh. </li>
                    <li>“Symptom Duration and Risk Factors for Delayed Return to Usual Health Among Outpatients with COVID-19 in a Multistate Health Care Systems Network - United States, March–June 2020.” Centers for Disease Control and Prevention, Centers for Disease Control and Prevention, 30 July 2020, www.cdc.gov/mmwr/volumes/69/wr/mm6930e1.htm. </li>
                </ol>
            </div>
      </div>
    );
}

export default Health;