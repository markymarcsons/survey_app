import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';



const Slider = () => {

    const [ value, setValue ] = useState(50);
  
    return (
      <RangeSlider
        value={value}
        onChange={e => setValue(e.target.value)}
        step={10}
      />
    );
  
  };

  export default Slider;

