import React from 'react'
import ReactStars from "react-rating-stars-component";

function Rate({filterrate}) {
    return (
        <div className='rateC'>
            <h4>Rate Filtre :</h4>
      <div className="rate">
       <ReactStars
       
       onChange={filterrate}
    count={5}
    
    size={40}
    activeColor="#ffd700"
  />, 
  </div>    
        </div>
    )
}

export default Rate
