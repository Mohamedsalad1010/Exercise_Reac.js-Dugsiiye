import React, { useContext } from 'react'
import CartContext from './cart.context'


const ProductItems = ( {itemId , itemName , price}) => {
  const {addCart} = useContext(CartContext)
  const handleAdd = () =>{
    addCart({id: itemId, name: itemName , price})
    console.log("add")
  }
  return (
    <div>
      <h3>{itemName}</h3>
      <p>price: {price}</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default ProductItems
