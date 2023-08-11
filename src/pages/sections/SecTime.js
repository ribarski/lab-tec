import { useState } from "react";
import './SecTime.css'

const SecTime = () => {
  const [times, setTimes] = useState([]);
  
  const addTime = () => {
    setTimes(prevTimes => [...prevTimes, <SecTime key={prevTimes.length} />]);
  };
    
    return(

    <div className='container'>
    <div className='linha-vertical'/>
    <div className='linha-horizontal'/>   
    <button  
    type="button" 
    className='year button'
    onClick={addTime}>
        2022
    </button>
    <div>{times}</div>
  </div>
  

)
};

export default SecTime;
