import React, { useContext } from 'react'
import { CartContext } from '../Features/Contextprovider'
import'../App.css'

const Cartproduct = ({product}) => {
  const {cart, dispatch} = useContext(CartContext)
  const Increase = (id) => {
    const Index = cart.findIndex((item) => item.id === id);
    if(cart[Index].quantity <= 10){
      dispatch({type: 'Increase', id: id})
    }
  };
  const Decrease = (id) => {
    const Index = cart.findIndex((item) => item.id === id);
    if(cart[Index].quantity > 1){
      dispatch({type: 'Decrease', id: id})
    }
  };
  if (!product || !product.image) 
  { return <div>No image available</div>;}
  return (
    <div className='d-flex border mb-2 main'>
      <img src={product.image} alt="" className='w-25 h-25 p-3'/>
      <div className="detail">
        <h4 className='title'>{product.title}</h4>
        <h4 className='description'>{product.description}</h4>
        <h4 className='price'>${product.discounted_price}</h4>
      </div>
      <div className="buttons">
        <button className="btn rounded-circle px-2"  onClick={() => Decrease(product.id)}><b>-</b></button>
        <button className='rounded'>{product.quantity}</button>
        <button className="btn rounded-circle px-2" onClick={() => Increase(product.id)}> <b>+</b></button>
      </div>
      <button className="btn btn-sm btn-danger" onClick={() => dispatch({type: 'Remove', id: product.id})}>remove</button>
    </div>
  )
};

export default Cartproduct;
