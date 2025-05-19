import React, { useState } from 'react';
import './IncorrectDelivery.css';

const IncorrectDelivery = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherGenerated, setIsVoucherGenerated] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVoucher = () => {
    // Generate a random 8-character voucher code
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setVoucherCode(code);
    setIsVoucherGenerated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Submitted:', { capturedImage, voucherCode });
    // Reset form
    setCapturedImage(null);
    setVoucherCode('');
    setIsVoucherGenerated(false);
  };

  return (
    <div className="incorrect-delivery-container">
      <h2>Incorrect Delivery Report</h2>
      
      <div className="camera-section">
        {!capturedImage ? (
          <div className="upload-section">
            <label htmlFor="image-upload" className="upload-button">
              Take Photo
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <p className="upload-hint">Click to take a photo of the incorrect delivery</p>
          </div>
        ) : (
          <div className="captured-image">
            <img src={capturedImage} alt="Captured incorrect delivery" />
            <button onClick={() => setCapturedImage(null)} className="retake-button">
              Retake Photo
            </button>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="delivery-form">
        <div className="form-group">
          <label>Order Number:</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Description of Issue:</label>
          <textarea required rows="4" />
        </div>

        {!isVoucherGenerated && (
          <button
            type="button"
            onClick={generateVoucher}
            className="voucher-button"
            disabled={!capturedImage}
          >
            Generate Voucher
          </button>
        )}

        {isVoucherGenerated && (
          <div className="voucher-display">
            <h3>Your Voucher Code:</h3>
            <p className="voucher-code">{voucherCode}</p>
            <p className="voucher-note">Please save this code for your next order!</p>
          </div>
        )}

        <button
          type="submit"
          className="submit-button"
          disabled={!capturedImage || !isVoucherGenerated}
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default IncorrectDelivery; 