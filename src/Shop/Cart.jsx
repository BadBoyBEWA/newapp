import React, { useContext} from 'react'
import "../App.css"
import { CartContext } from '../Features/Contextprovider'
import Cartproduct from './Cartproduct'
import { totalItem, totalPrice } from '../Features/CartReducer'


const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log('====================================');
    console.log(cart);
    console.log('====================================');
  return (
    <div>
       <div className='titleBar'>
            <div className="text">
                <h1>My Cart</h1>
                <p><b>Home</b>CART</p>
            </div>
        </div>
        <div className='row mt-5 mb-5 w-80 m-auto'>
            <div className="col-8">
                    {cart.map (p =>(
                        <Cartproduct product ={p}/>
                    ))}
            </div>
            <div className="col-4">
                <div className="bg-secondary p-3 text-white">
                    <h5>Total Item:{totalItem(cart)}</h5>
                    <h5>Total Price:${totalPrice(cart)}</h5>
                    <button className='btn btn-warning'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Cart