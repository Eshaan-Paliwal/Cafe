import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingBag, FaCalendarAlt, FaRupeeSign } from 'react-icons/fa';
import './OrderHistory.css';

const OrderHistory = () => {
  // Mock data for orders - replace with actual data from your backend
  const orders = [
    {
      id: 'ORD001',
      date: '2024-03-15',
      items: [
        { name: 'Cappuccino', quantity: 2, price: 180 },
        { name: 'Chocolate Croissant', quantity: 1, price: 120 }
      ],
      total: 480,
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      date: '2024-03-14',
      items: [
        { name: 'Latte', quantity: 1, price: 160 },
        { name: 'Blueberry Muffin', quantity: 2, price: 140 }
      ],
      total: 440,
      status: 'Delivered'
    }
  ];

  return (
    <div className="order-history">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="order-history-title"
      >
        <FaShoppingBag className="title-icon" />
        Order History
      </motion.h2>

      <div className="orders-container">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            className="order-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="order-header">
              <div className="order-info">
                <span className="order-id">Order #{order.id}</span>
                <span className="order-date">
                  <FaCalendarAlt className="date-icon" />
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>
              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>

            <div className="order-items">
              {order.items.map((item, itemIndex) => (
                <div key={itemIndex} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">
                    <FaRupeeSign className="price-icon" />
                    {item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <span className="order-total">
                Total: <FaRupeeSign className="price-icon" />
                {order.total}
              </span>
              <button className="reorder-button">Reorder</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory; 