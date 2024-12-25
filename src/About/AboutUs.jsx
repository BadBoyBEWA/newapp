import React from 'react'
import '../App.css'
import HomeOnlineShop from '../components/HomeOnlineShop'
import Images from '../config/Images'
import { Quote } from 'react-bootstrap-icons'
import HomePolicy from '../components/HomePolicy'

export default function AboutUs() {
    const comment = [
        {pic : Images.img10,
         review : "The app has a user-friendly interface, making it very easy to browse through products.",
         name: "Sophia Thompson"
        },
        {pic : Images.img11,
         review : "While browsing, I experienced a few glitches, and the app froze a couple of times.",
         name: "Isabella Brown"
        },
        {pic : Images.img12,
         review : "I encountered a problem with online payments—my card was charged twice.",
         name: "Hannah Robinson"
        }
      ]

    
  return (
    <div>
        <div className='titleBar'>
            <div className="text">
                <h1>About Us</h1>
                <p><b>Home</b>About</p>
            </div>
        </div>

        <HomeOnlineShop />

        <div className='testimony'>
            <div className='testimonyHeading'>
                <h1>Testimony</h1>
            </div>
            <div className='testimonyWrapper'>
                {comment.map((item, index) => (
                    <div className="testimonyCardHolder" key={index}>
                        <div className="testimonypics">
                            <img src={item.pic} alt={item.name} />
                            <span><Quote /></span>
                        </div>

                        <div className="testimonyComments">
                            <p>{item.review}</p>
                            <h6>{item.name}</h6>
                            <p>Customer</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        

        <HomePolicy />
    </div>
  )
}
