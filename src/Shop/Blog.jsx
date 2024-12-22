import React from 'react'

export default function Blog({pics, subText, date}) {
  return (
    
                <div className="blogCard">
                    <div className="blogImg">
                        <img src={pics} alt="" />
                    </div>
                    <div className="blogText">
                        <p>{subText}</p>
                        <p>{date}</p>
                    </div>
                </div>
  )
}
