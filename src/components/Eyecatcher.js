import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/surveydisplay' ClassName='btn'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
          GET STARTED
          </Button>
        </Link>
        < Link to='/mockdisplay' ClassName='btn-mobile'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            // onClick={console.log('hey')}
          >
            MOCK PROFILE
          </Button>
        </Link>
      </div>
    </div>
  );
};


export default Eyecatcher;