import '../App.css';
import React from 'react';
import DiscreteSlider from './slider.js'
import Mortality from './mortality';
import Condition from './condition';

function health() {
    return(
        <div>
            <p>test</p>
            <div id='timeline_slider'>
                <DiscreteSlider />
            </div>
            <div><Mortality></Mortality></div>
            <div><Condition></Condition></div>
      </div>
    );
}

export default health;