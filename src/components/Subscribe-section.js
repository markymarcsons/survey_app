import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Buttons.js'
import '../App.css';
import './Subscribe-section.css';
import Slider from './Slider.js';



function Subscribe() {
    return(
        <div className="Subscribe-container">
            <div className="Slider-container">
                <p>Monthly Subscription Amount</p>
                <Slider />
                {/* insert subscribe Button from material ui */}

            </div>  
            <div className="Button-container">
                <Link to='/surveydisplay' ClassName='btn'>
                    <Button
                        className='btns'
                        buttonStyle='btn--secondary'
                        buttonSize='btn--large'
                    >
                    Go To Survey
                    </Button>
                </Link>
            </div>
        </div>

    )
    };

export default Subscribe;