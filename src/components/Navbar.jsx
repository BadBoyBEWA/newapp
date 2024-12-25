import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  return (
    <div className='navContainer'>
        <div className="navWrapper">
            <div className="navLeft">
                <h5>MADAM BOUTIQUE</h5>
            </div>

            <div className="navRight">
                <ul>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/">Shop</a> </li>
                    <li> <a href="/">About</a> </li>
                    <li> <a href="/">Blog</a> </li>
                    <li> <a href="/">Contact</a> </li>
                    <li> <a href="/"><i class="bi bi-cart3"></i> </a> </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
