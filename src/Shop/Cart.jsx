import React, { useContext} from 'react'
import "../App.css"
import { CartContext } from '../Features/Contextprovider'
import Cartproduct from './Cartproduct'


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
        <div className='row'>
            <div className="col-8">
                    {cart.map (p =>(
                        <Cartproduct product ={p}/>
                    ))}
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}


export default Cart