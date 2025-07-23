import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartOpen, 
    setCartOpen,
    subtotal 
  } = useCart();
  
  const [checkoutStep, setCheckoutStep] = useState('cart'); // cart, billing, confirmation
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would process payment here
    setCheckoutStep('confirmation');
  };
  
  const handleBackToCart = () => {
    setCheckoutStep('cart');
  };
  
  const handleProceedToCheckout = () => {
    if (cartItems.length > 0) {
      setCheckoutStep('billing');
    }
  };
  
  const handleNewOrder = () => {
    clearCart();
    setCheckoutStep('cart');
    setCartOpen(false);
  };
  
  // Calculate tax and total
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  
  return (
    <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Order</h3>
        <button className="close-cart" onClick={() => setCartOpen(false)}>×</button>
      </div>
      
      {checkoutStep === 'cart' && (
        <>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <p className="empty-cart-subtext">Add items from our menu to get started</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className="remove-item" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <div className="cart-totals">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="tax">
                  <span>Tax (8%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
              <div className="cart-actions">
                <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                <button className="checkout-btn" onClick={handleProceedToCheckout}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </>
      )}
      
      {checkoutStep === 'billing' && (
        <div className="billing-form">
          <button className="back-button" onClick={handleBackToCart}>
            ← Back to Cart
          </button>
          
          <h4>Billing Information</h4>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={billingInfo.name} 
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={billingInfo.email} 
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={billingInfo.phone} 
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea 
                id="address" 
                name="address" 
                value={billingInfo.address} 
                onChange={handleInputChange}
                required
              />
            </div>
            
            <h4>Payment Information</h4>
            
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                name="cardNumber" 
                value={billingInfo.cardNumber} 
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            
            <div className="payment-row">
              <div className="form-group">
                <label htmlFor="cardExpiry">Expiry Date</label>
                <input 
                  type="text" 
                  id="cardExpiry" 
                  name="cardExpiry" 
                  value={billingInfo.cardExpiry} 
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cardCvc">CVC</label>
                <input 
                  type="text" 
                  id="cardCvc" 
                  name="cardCvc" 
                  value={billingInfo.cardCvc} 
                  onChange={handleInputChange}
                  placeholder="123"
                  required
                />
              </div>
            </div>
            
            <div className="order-summary">
              <h4>Order Summary</h4>
              <div className="summary-items">
                {cartItems.map(item => (
                  <div className="summary-item" key={item.id}>
                    <span>{item.quantity} × {item.name}</span>
                    <span>₹{(parseFloat(item.price.replace(/[₹$]/g, '')) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-totals">
                <div className="summary-subtotal">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-tax">
                  <span>Tax (8%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button type="submit" className="place-order-btn">
              Place Order (₹{total.toFixed(2)})
            </button>
          </form>
        </div>
      )}
      
      {checkoutStep === 'confirmation' && (
        <div className="order-confirmation">
          <div className="confirmation-icon">✓</div>
          <h3>Thank You!</h3>
          <p>Your order has been placed successfully.</p>
          <p className="order-number">Order #: {Math.floor(Math.random() * 10000)}</p>
          
          <div className="confirmation-details">
            <p>We've sent a confirmation email to {billingInfo.email}</p>
            <p>Estimated delivery time: 30-45 minutes</p>
          </div>
          
          <button className="new-order-btn" onClick={handleNewOrder}>
            Place Another Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;