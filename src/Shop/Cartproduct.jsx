import React from 'react'

const Cartproduct = ({product}) => {
  // if (!product || !product.image) 
  // { return <div>No image available</div>;}
  return (
    <div className='d-flex'>
      <img src={product.image} alt="" />
      <div className="detail">
        <h4>{product.title}</h4>
        <h4>${product.price}</h4>
      </div>
      <div className="buttons">
        <button className="btn rounded-circle px-2">-</button>
        <button className='rounded'>quantity</button>
        <button className="btn rounded-circle px-2">+</button>
      </div>
      <button className="btn btn-danger">remove</button>
    </div>
  )
};

export default Cartproduct;
