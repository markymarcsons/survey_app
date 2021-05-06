import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';



const Slider = () => {

    const [ value, setValue ] = useState(50);
    const [ finalValue, setFinalValue ] = useState(null);

    const Rewards = () => {
      if(finalValue <= 10) {
        let reward = 'bronze badge';
        return reward
      }
      if(finalValue > 10 && finalValue <=50){
        let reward = 'silver badge';
        return reward
      }
      else {
        let reward = 'golden badge';
        return reward
      };
    };


    return(
      <>
        <RangeSlider
          value={value}
          onChange={e => setValue(e.target.value)}
          onAfterChange={e => setFinalValue(e.target.value)}/>
          <div>Subscription Fee: {finalValue}$</div>
          <div>Receiving Rewards: {Rewards}</div>
      </>
    );
  };

  export default Slider;

