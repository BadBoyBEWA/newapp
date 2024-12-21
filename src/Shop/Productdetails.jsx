import { useEffect,useState } from "react";
import "../App.css"
import React from 'react'
import Shop from "./Shop.jsx"
import Data from "../Data.json"
import Detail from "./Data.jsx"

//import { useParams } from "react-router-dom"

export default function Productdetails() {
  const [product, setProduct] = useState(Data.products);
  
  return (
    <div className="main">
      <Shop/>
      <div className="items">
      {
        product.map(p => (
          <Detail products ={p}/>
        )) 
      }
      </div>
    </div>
  )
}