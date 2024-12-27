import React, { useContext } from 'react';
import "../App.css"
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { CartContext } from '../Features/Contextprovider';


export default function Navbar() {
    const {cart} = useContext(CartContext)
  return (
    <div className='navContainer'>
        <div className="navWrapper">
            <div className="navLeft">
                <h5>MADAM BOUTIQUE</h5>
            </div>

            <div className="navRight">
                <ul>
                    <li> <Link href="/">Home</Link> </li>
                    <li> <Link to="/shop">Shop</Link> </li>
                    <li> < Link href="/about">About</Link> </li>
                    <li> <Link to href="/">Blog</Link> </li>
                    <li> <Link to ="/Contact" href="/">Contact</Link> </li>
                    <li> <Link to='/cart'><i class="bi bi-cart3"></i>[{cart.length}]</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}