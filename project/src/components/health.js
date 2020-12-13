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
            <div className="health_bottom">
                <div><Mortality></Mortality></div>
                <div><Condition></Condition></div>
            </div>
      </div>
    );
}

export default Health;