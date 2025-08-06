import React, { useContext } from 'react'
import CartContext from './cart.context'


const CartSummary = () => {

    const {cartItems , removeItem} = useContext(CartContext)
  return (
    <div>
      <h2>carts Summary</h2>
      <ul>
        {cartItems.map((cart)=> (
            <li key={cart.id}>{cart.name} - price: {cart.price}
            <button onClick={()=> removeItem(cart.id , console.log("removed:", cart))}>remove</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CartSummary
