import React, { useState, useContext } from 'react';

const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };


  const removeItemFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, calculateTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};


const Product = ({ id, name, price }) => {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addItemToCart({ id, name, price });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};


const Cart = () => {
  const { cart, removeItemFromCart, calculateTotalPrice } = useContext(
    CartContext
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ${item.price}</p>
          <button onClick={() => removeItemFromCart(index)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${calculateTotalPrice()}</h3>
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart Application</h1>
        <Product id={1} name="Product 1" price={10} />
        <Product id={2} name="Product 2" price={20} />
        <Product id={3} name="Product 3" price={30} />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
