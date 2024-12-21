//import { useState } from "react"
import React, { useContext } from 'react'
//import Images from "../img"
import "../App.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/Contextprovider'


export default function Product() {
  const {dispatch} = useContext(CartContext)

  return (
    <div>
      <Link to='/cart' className='cart text-black text-decoration-none' onClick={() => dispatch({type: "Add"})}>Add to Cart</Link>
      <div className='titleBar'>
        <div className="text">
        <h1>Collection</h1>
        <p><b>Home</b>Product</p>
        </div>
      </div>
      
    </div>
  )
}
