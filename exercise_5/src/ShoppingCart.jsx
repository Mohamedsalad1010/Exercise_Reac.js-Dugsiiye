import { useState } from "react";

const ShopCArt = () => {
  const [productItems, setProductItems] = useState([]);

  const [productInput, setProductInput] = useState({
    name: "",
    price: "",
  });

  const AddToCart = () => {
    const name = productInput.name.trim();
    const price = parseFloat(productInput.price);
    if (!name || isNaN(price)) {
      alert("enter product name and price .");
      return;
    } else {
      const newProduct = {
        id: crypto.randomUUID(),
        name,
        price,
        quantity: 1,
      };
      setProductItems([...productItems, newProduct]);
      setProductInput({ name: "", price: "" });
      console.log(productItems);
    }

    console.log(productInput);
  };

  const deleteCartItem = (id) => {
    setProductItems(productItems.filter((item) => item.id !== id));
  };

  const increaseProduct = (id) => {
    const updateQuantity = productItems.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    console.log(updateQuantity);
    setProductItems(updateQuantity);
  };

  const decreaseQuantity = (id) => {
    const decreaseQuantity = productItems.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProductItems(decreaseQuantity);
  };

  const TotlaPrice = productItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1>Simple shopping cart</h1>
      <h3>Add a Product</h3>

      <input
        type="text"
        placeholder="product name"
        onChange={(e) =>
          setProductInput({ ...productInput, name: e.target.value })
        }
        value={productInput.name}
      />
      <input
        type="number"
        placeholder="price"
        onChange={(e) =>
          setProductInput({ ...productInput, price: e.target.value })
        }
        value={productInput.price}
      />
      <button onClick={AddToCart}>Add to cart</button>

      {productItems.length > 0 ? (
        <ul>
          <h2>products in carts</h2>
          {productItems.map((product) => (
            <li>
              <span> {product.name}</span> - ${product.price}
              <div>
                Quantity:
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increaseProduct(product.id)}>+</button>
              </div>
              <button onClick={() => deleteCartItem(product.id)}>
                remove
              </button>
            </li>
          ))}
          <p>Total Price: ${TotlaPrice}</p>
        </ul>
      ) : (
        <p>this cart is emty</p>
      )}
    </div>
  );
};

export default ShopCArt;
