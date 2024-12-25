import React from 'react'
import '../App.css';
import Images from '../config/Images';
import Trend from './Trend';
import HomeOnlineShop from './HomeOnlineShop';
import HomeProduct from './HomeProduct';
import { Quote } from 'react-bootstrap-icons';
import HomeBlog from './HomeBlog';
import HomeHero from './HomeHero';
import HomePolicy from './HomePolicy';

export default function Home() {
    const madam = [
        { pic : Images.img2, price: "$120.00"},
        { pic : Images.img3, price: "$140.00"},
        { pic : Images.img4, price: "$420.00"},
        { pic : Images.img5, price: "$20.00"},
        { pic : Images.img6, price: "$100.00"},
        { pic : Images.img7, price: "$120.00"}
      ];
    
      const firstFour = madam.slice(0, 4);
    
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
    
      const blogs = [{
        pics : Images.img14,
        subText : "5 Tips on Shopping with Madam Boutique",
        date : "November 29, 2024"
      },
      {
        pics : Images.img15,
        subText : "Trends in casual accessories for women",
        date : "November 30, 2024"
      },
      {
        pics : Images.img16,
        subText : "Dressy outfits for the office: from casual to formal",
        date : "December 5, 2024"
      }
      ]
    
  return (
    <div className='home'>

        <HomeHero />

        <div className="trendContainer">
            <div className="trendWrapper">
                <div className="trendHeading">
                    <h1>Trending</h1>
                    <h3>Trending</h3> 
                </div>

                <div className="trendImageSlider"> 
                    {madam.map((ma, index) => (
                        <Trend key={index} pic={ma.pic} price={ma.price} />
                    ))}
                </div>
            </div>
        </div>

        <HomeOnlineShop />

        <div className="productContainer">
            <div className="productWrapper">
                <div className="productHeading">
                    <h1>Products</h1>
                    <h3>Our Products</h3> 
                </div>

                <div className="productImage"> 
                    {firstFour.map((ma, index) => (
                        <HomeProduct key={index} pic={ma.pic} price={ma.price} />
                    ))}
                </div>

                <div className='summerContainer'>
                    <div className='summerWrapper'>
                        <h1>Summer Sale</h1>
                    </div>
                </div>

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
            </div>
        </div>

        <div className='blogContainer'>
            <div className="blogWrapper">
                <div className="blogSubTitle">
                    <h1>Blog</h1>
                    <h3>Recent Blogs</h3>
                </div>

                <div className="blogCardWrapper">
                    {blogs.map((item, index)=> (
                        <HomeBlog key={index} pics={item.pics} subText={item.subText}
                        date={item.date}/>
                    ))}
                </div>

            </div>
        </div>

        <HomePolicy />


    </div>
  )
}
