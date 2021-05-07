import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import './Slider.css';



const Slider = () => {

  
    const [ value, setValue ] = useState(50);
    const [ finalValue, setFinalValue ] = useState(null);
    


    const Rewards = () => {
  
      if(finalValue <= 10) {
        return(
        <>
          <li>bronze badge</li>
        </>)
      }
      if(finalValue > 10 && finalValue <=20){
        return(
        <>
          <li>Silver Username Badge</li>
          <li>Painted Mug</li>
        </>) 
      }
      if(finalValue > 20 && finalValue <=50){
        return(
        <>
          <li>Golden Username Badge</li>
          <li>Painted T-shirt</li>
        </>) 
      }
      else {
        return (
        <>
          <li>Platinum Username Badge</li>
          <li>Painted T-Shirt</li>
          <li>1-on-1 Painting Session</li>
        </>
        )

      };
    };

    

    return(
      <>
        <RangeSlider
          min={1}
          max={100}
          value={value}
          onChange={e => setValue(e.target.value)}
          onAfterChange={e => setFinalValue(e.target.value)}/>
          <div className='sliderValues-container'>
            <p>Subscription Fee: {finalValue}$</p>
            <p>Rewards:</p>
            <Rewards />
          </div>
          
      </>
    );
  };

  export default Slider;

