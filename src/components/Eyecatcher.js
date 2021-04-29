import React from 'react';
import '../App.css';
import { Button } from './Buttons';
import './Eyecatcher.css'

function Eyecatcher() {
  return (
    <div className='Eyecatcher-container'>
      <video src='/videos/crowd.mp4' autoPlay loop muted />
      <h1>Crowdfunding Survey</h1>
      <p>What are you waiting for?</p>
      <div className='Eyecatcher-btns'>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          I NEED MORE INFO!
        </Button> */}

      </div>
    </div>
  );
};


export default Eyecatcher;