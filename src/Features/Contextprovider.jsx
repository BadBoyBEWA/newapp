import React, { createContext, useReducer } from 'react'
import cartReducer from './CartReducer';


export const CartContext = createContext()

const Contextprovider = ({children}) => {
    const [cart,dispatch] = useReducer(cartReducer, []);
  return (
    <div>
      <CartContext.Provider value={{cart, dispatch}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default Contextprovider;
