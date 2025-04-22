import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  
  // Calculate subtotal whenever cart items change
  useEffect(() => {
    const newSubtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[₹$]/g, ''));
      return total + (price * item.quantity);
    }, 0);
    
    setSubtotal(newSubtotal);
  }, [cartItems]);
  
  // Handle body scroll lock when cart is open
  useEffect(() => {
    if (cartOpen) {
      // Prevent background scrolling when cart is open
      document.body.style.overflow = 'hidden';
    } else {
      // Allow scrolling when cart is closed
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [cartOpen]);
  
  // Add item to cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, increase quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Item doesn't exist, add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    // Open cart when adding items
    setCartOpen(true);
  };
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Update item quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };
  
  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  
  // Toggle cart visibility
  const toggleCart = () => {
    setCartOpen(prevState => !prevState);
  };
  
  return (
    <CartContext.Provider 
      value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart,
        cartOpen,
        setCartOpen,
        toggleCart,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;