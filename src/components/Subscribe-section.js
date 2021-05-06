import React from 'react';
import '../App.css';
import './Subscribe-section.css';
import Slider from './Slider.js'


function Subscribe() {
    return(
        <div className="Subscribe-container">
            <div className="Slider-container">
                <p>monthly donation</p>
                <Slider />
            </div>  
        </div>

    )
    };

export default Subscribe;