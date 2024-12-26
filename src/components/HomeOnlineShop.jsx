import React from 'react'
import Images from '../config/Images'

export default function HomeOnlineShop() {
  return (
    <div className='onlineContainer'>
        <div className="onlineWrapper">
            <div className="onlineImage">
                <img src={Images.img8} alt="" />
            </div>

            <div className="onlineContent">
                <h2>Madam Boutique <br /> Online Fashion Shop</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.   <br />Placeat accusamus animi accusantium vero. Vel odit 
                    <br />libero minus, beatae harum quae distinctio rerum <br />ratione! Tempora rerum, aliquid sint non magni dicta!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi aperiam cum pariatur commodi quis blanditiis nemo culpa ad quisquam.
                </p>
            </div>
        </div>
    </div>
  )
}
