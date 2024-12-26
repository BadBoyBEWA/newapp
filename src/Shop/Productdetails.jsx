import { useEffect,useState } from "react";
import "../App.css"
import React from 'react'
import Shop from "./Shop.jsx"
import Data from "../Data.json"
import Detail from "./Data.jsx"

//import { useParams } from "react-router-dom"

export default function Productdetails() {
  const [products, setProduct] = useState(Data.products);
  
  return (
    <div className="main">
      <Shop/>
      <div className="items">
      {
        products.map(p => (
          <Detail product ={p}/>
        )) 
      }
      </div>
    </div>
  )
}