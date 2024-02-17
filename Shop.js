
import React, { useState } from 'react';
import './Shop.css';

const products = [
  { id: 1, name: 'Product 1', price: 890, category: 'Category 1', image:'headphones.png', rating: 4 },
  { id: 2, name: 'Product 2', price: 200, category: 'Category 2', image: 'Shirt.jpg', rating: 3 },
  { id: 3, name: 'Product 3', price: 15, category: 'Category 1', image: 'watches.png', rating: 5 },
  { id: 4, name: 'Product 4', price: 25, category: 'Category 2', image: 'product1.png', rating: 4 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <select>
              <option value="">All Categories</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
              <p>Rating: {product.rating}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.map((product, index) => (
          <div className="cart-item" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="cart-item-info">
              <h3>{product.name}</h3>
              <p>Rs.{product.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
