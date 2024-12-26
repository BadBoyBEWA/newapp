import React from 'react'
import { Star } from 'react-bootstrap-icons';

export default function Trend({pic, price}) {
  return (
   
            <div className="trendImage1">
              <div className="picture">
                <img src={pic} alt="" className='pics'/>
              </div>

              <div className="description">
                <h5>Young Woman Wearing Dress</h5>

                <div className="amount">
                  <div className="costPrice">
                    <span>{price}</span>
                  </div>

                  <div className="rating">
                    <span> <Star /> </span>
                    <span> <Star /> </span>
                    <span> <Star /> </span>
                    <span> <Star /> </span>
                    <span> <Star /> </span>
                  </div>
                  
                  
                </div>
              </div>
            </div>
    
  )
}
