import React from 'react';
import { useCart } from '../context/CartContext';

function CartButton() {
  const { toggleCart, cartItems } = useCart();
  
  // Calculate total quantity of items in cart
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <button className="cart-button" onClick={toggleCart}>
      <span className="cart-icon">🛒</span>
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </button>
  );
}

export default CartButton;