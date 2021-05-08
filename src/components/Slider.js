import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './Slider.css';



const Slider = () => {

  
    const [ value, setValue ] = useState(50);
    const [ finalValue, setFinalValue ] = useState(null);
    


    const Rewards = () => {
      if (finalValue === null){
        return(
          <>
          </>
        )
      }
      if(finalValue <= 5) {
        return(
        <>
          <h6>Tier 1</h6>
          <li>Bronze Username Badge</li>
          <li>Color Panel</li>
        </>)
      }
      if(finalValue > 5 && finalValue <=10){
        return(
        <>
          <h6>Tier 2</h6>
          <li>Silver Username Badge</li>
          <li>Painted Mug</li>
        </>) 
      }
      if(finalValue > 10 && finalValue <=25){
        return(
        <>
          <h6>Tier 3</h6>
          <li>Golden Username Badge</li>
          <li>Painted T-shirt</li>
        </>) 
      }
      else if (finalValue > 25) {
        return (
        <>
          <h6>Tier 4</h6>
          <li>Platinum Username Badge</li>
          <li>Painted Canvas</li>
          <li>1-on-1 Painting Session</li>
        </>
        )

      };
    };

    

    return(
      <>
        <RangeSlider
          min={1}
          max={50}
          value={value}
          onChange={e => setValue(e.target.value)}
          onAfterChange={e => setFinalValue(e.target.value)}
          />

          <div className='sliderValues-container'>
            <p>Subscription Fee: {finalValue}$ a month</p>
            <p>Rewards:</p>
            <Rewards />
          </div>
          
      </>
    );
  };

  export default Slider;

