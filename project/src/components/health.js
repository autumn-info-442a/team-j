import '../App.css';
import React from 'react';
import DiscreteSlider from './slider.js'
import Mortality from './mortality';
import Condition from './condition';
import bootstrap from 'bootstrap';

function health() {
    return(
        <div class="container">
            <div>
                <div id='timeline_slider' className="viz">
                    <DiscreteSlider />
                </div>
            </div>
            <div>
                <div className="viz">
                    <Mortality />
                </div>
                <div className="viz">
                    <Condition />
                </div>
            </div>
      </div>
    );
}

export default health;