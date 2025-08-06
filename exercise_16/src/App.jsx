import { useState } from 'react'
import CartContext from './cart.context'
import ProductItems from './productItems'
import CartSummary from './cartSummary'




function App() {
  const [cartItems , setCatrItems] = useState([])
  
const addCart = (item) =>{
  setCatrItems([...cartItems , item])
  console.log("cart")
}
const removeItem = (itemId) => {
  setCatrItems(cartItems.filter((item)=> item.id !== itemId))
}
const value = {cartItems ,addCart , removeItem}

return(
<>
<CartContext.Provider value={value} >
<ProductItems  itemId = {Date.now()}  itemName={'Widget'} price= {15.99}/>
<ProductItems  itemId = {Date.now()}  itemName={'Gadget'} price= {18.99}/>
<CartSummary/>
</CartContext.Provider >



<div>

  
</div>
</>
)
}

export default App
