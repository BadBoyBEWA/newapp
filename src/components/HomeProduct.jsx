import React from 'react'
import { Heart, Star } from 'react-bootstrap-icons';

export default function HomeProduct({pic, price}) {
  return (
   
            <div className="productCard">
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

                    <div className="desc">
                        <hr />

                        <div className="cart">
                            <div className="addToCart">
                                <h5>ADD TO CART +</h5>
                            </div>

                            <div className="fav">
                                <span><Heart /></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
  )
}
