import React, { useState, useEffect } from 'react';

function Reservation() {
  // State for reservation details
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [partySize, setPartySize] = useState(2);
  const [selectedTable, setSelectedTable] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  
  // State for booking steps
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  
  // State for available time slots
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  
  // Generate time slots based on selected date
  useEffect(() => {
    if (reservationDate) {
      // In a real app, this would come from an API based on availability
      const slots = [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
        '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
        '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
        '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
        '8:00 PM', '8:30 PM'
      ];
      setAvailableTimeSlots(slots);
    }
  }, [reservationDate]);
  
  // Table data - in a real app, this would come from a database
  const tables = [
    { id: 1, number: 1, seats: 2, x: 100, y: 100, width: 60, height: 60, shape: 'circle', status: 'available' },
    { id: 2, number: 2, seats: 2, x: 200, y: 100, width: 60, height: 60, shape: 'circle', status: 'available' },
    { id: 3, number: 3, seats: 4, x: 100, y: 200, width: 80, height: 80, shape: 'square', status: 'available' },
    { id: 4, number: 4, seats: 4, x: 200, y: 200, width: 80, height: 80, shape: 'square', status: 'available' },
    { id: 5, number: 5, seats: 6, x: 320, y: 150, width: 120, height: 80, shape: 'rectangle', status: 'available' },
    { id: 6, number: 6, seats: 2, x: 100, y: 320, width: 60, height: 60, shape: 'circle', status: 'available' },
    { id: 7, number: 7, seats: 2, x: 200, y: 320, width: 60, height: 60, shape: 'circle', status: 'available' },
    { id: 8, number: 8, seats: 8, x: 320, y: 300, width: 140, height: 80, shape: 'rectangle', status: 'available' },
  ];
  
  // Cafe features for the floor plan
  const cafeFeatures = [
    { id: 'bar', type: 'bar', x: 50, y: 50, width: 400, height: 30, label: 'Bar' },
    { id: 'entrance', type: 'entrance', x: 250, y: 400, width: 60, height: 20, label: 'Entrance' },
    { id: 'kitchen', type: 'kitchen', x: 450, y: 100, width: 80, height: 150, label: 'Kitchen' },
    { id: 'restroom1', type: 'restroom', x: 450, y: 280, width: 40, height: 40, label: 'WC' },
    { id: 'restroom2', type: 'restroom', x: 500, y: 280, width: 40, height: 40, label: 'WC' },
  ];
  
  // Handle table selection
  const handleTableSelect = (tableId) => {
    const table = tables.find(t => t.id === tableId);
    
    // Check if table has enough seats
    if (table.seats < partySize) {
      alert(`Table ${table.number} only seats ${table.seats} people. Please select a larger table or reduce your party size.`);
      return;
    }
    
    setSelectedTable(tableId);
  };
  
  // Handle form submission for each step
  const handleNextStep = () => {
    if (currentStep === 1) {
      // Validate date and time selection
      if (!reservationDate || !reservationTime) {
        alert('Please select both date and time for your reservation.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate table selection
      if (!selectedTable) {
        alert('Please select a table from the floor plan.');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Validate customer information
      if (!customerName || !customerEmail || !customerPhone) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // In a real app, this would send the reservation to a server
      // For now, we'll just simulate a successful booking
      const reference = `RES-${Math.floor(Math.random() * 10000)}`;
      setBookingReference(reference);
      setBookingComplete(true);
    }
  };
  
  // Handle going back to previous step
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Handle making a new reservation
  const handleNewReservation = () => {
    setReservationDate('');
    setReservationTime('');
    setPartySize(2);
    setSelectedTable(null);
    setCustomerName('');
    setCustomerEmail('');
    setCustomerPhone('');
    setSpecialRequests('');
    setCurrentStep(1);
    setBookingComplete(false);
    setBookingReference('');
  };
  
  // Get minimum date (today) for the date picker
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };
  
  // Render the table on the floor plan
  const renderTable = (table) => {
    const isSelected = selectedTable === table.id;
    let tableClass = `cafe-table table-${table.shape}`;
    
    if (isSelected) {
      tableClass += ' selected';
    } else if (table.status === 'booked') {
      tableClass += ' booked';
    }
    
    return (
      <div 
        key={table.id}
        className={tableClass}
        style={{
          left: `${table.x}px`,
          top: `${table.y}px`,
          width: `${table.width}px`,
          height: `${table.height}px`,
        }}
        onClick={() => table.status !== 'booked' && handleTableSelect(table.id)}
      >
        <span className="table-number">{table.number}</span>
        <span className="table-seats">{table.seats}</span>
      </div>
    );
  };
  
  // Render cafe features on the floor plan
  const renderFeature = (feature) => {
    return (
      <div 
        key={feature.id}
        className={`cafe-feature feature-${feature.type}`}
        style={{
          left: `${feature.x}px`,
          top: `${feature.y}px`,
          width: `${feature.width}px`,
          height: `${feature.height}px`,
        }}
      >
        <span className="feature-label">{feature.label}</span>
      </div>
    );
  };
  
  return (
    <div className="reservation-section">
      <h2>Reserve a Table</h2>
      
      {!bookingComplete ? (
        <div className="reservation-container">
          <div className="reservation-steps">
            <div className={`step ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-text">Date & Time</span>
            </div>
            <div className={`step ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-text">Select Table</span>
            </div>
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-text">Your Details</span>
            </div>
          </div>
          
          {currentStep === 1 && (
            <div className="reservation-step-content">
              <h3>Choose Date & Time</h3>
              <div className="form-group">
                <label htmlFor="reservation-date">Date</label>
                <input 
                  type="date" 
                  id="reservation-date" 
                  min={getMinDate()}
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="reservation-time">Time</label>
                <select 
                  id="reservation-time"
                  value={reservationTime}
                  onChange={(e) => setReservationTime(e.target.value)}
                  disabled={!reservationDate}
                  required
                >
                  <option value="">Select a time</option>
                  {availableTimeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="party-size">Number of Guests</label>
                <select 
                  id="party-size"
                  value={partySize}
                  onChange={(e) => setPartySize(parseInt(e.target.value))}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              
              <div className="step-actions">
                <button className="next-step-btn" onClick={handleNextStep}>
                  Continue to Select Table
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="reservation-step-content">
              <h3>Select a Table</h3>
              <p className="table-instruction">
                Please select a table for {partySize} {partySize === 1 ? 'person' : 'people'} on {reservationDate} at {reservationTime}
              </p>
              
              <div className="floor-plan-container">
                <div className="floor-plan">
                  {cafeFeatures.map(feature => renderFeature(feature))}
                  {tables.map(table => renderTable(table))}
                </div>
                
                <div className="floor-plan-legend">
                  <div className="legend-item">
                    <div className="legend-color available"></div>
                    <span>Available</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color selected"></div>
                    <span>Selected</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color booked"></div>
                    <span>Booked</span>
                  </div>
                </div>
              </div>
              
              <div className="selected-table-info">
                {selectedTable ? (
                  <p>
                    You've selected Table {tables.find(t => t.id === selectedTable).number} 
                    ({tables.find(t => t.id === selectedTable).seats} seats)
                  </p>
                ) : (
                  <p>Please select a table from the floor plan</p>
                )}
              </div>
              
              <div className="step-actions">
                <button className="prev-step-btn" onClick={handlePreviousStep}>
                  Back
                </button>
                <button className="next-step-btn" onClick={handleNextStep}>
                  Continue to Your Details
                </button>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="reservation-step-content">
              <h3>Your Details</h3>
              
              <div className="form-group">
                <label htmlFor="customer-name">Full Name*</label>
                <input 
                  type="text" 
                  id="customer-name" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="customer-email">Email Address*</label>
                <input 
                  type="email" 
                  id="customer-email" 
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="customer-phone">Phone Number*</label>
                <input 
                  type="tel" 
                  id="customer-phone" 
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="special-requests">Special Requests</label>
                <textarea 
                  id="special-requests" 
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Any special requests or dietary requirements?"
                  rows="3"
                />
              </div>
              
              <div className="reservation-summary">
                <h4>Reservation Summary</h4>
                <p><strong>Date:</strong> {reservationDate}</p>
                <p><strong>Time:</strong> {reservationTime}</p>
                <p><strong>Guests:</strong> {partySize}</p>
                <p><strong>Table:</strong> {selectedTable ? tables.find(t => t.id === selectedTable).number : 'None selected'}</p>
              </div>
              
              <div className="step-actions">
                <button className="prev-step-btn" onClick={handlePreviousStep}>
                  Back
                </button>
                <button className="complete-reservation-btn" onClick={handleNextStep}>
                  Complete Reservation
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="reservation-confirmation">
          <div className="confirmation-icon">✓</div>
          <h3>Reservation Confirmed!</h3>
          <p className="confirmation-message">
            Thank you for your reservation. We look forward to serving you at Cozy Corner Café.
          </p>
          
          <div className="confirmation-details">
            <p className="booking-reference">Booking Reference: {bookingReference}</p>
            <div className="reservation-details">
              <p><strong>Date:</strong> {reservationDate}</p>
              <p><strong>Time:</strong> {reservationTime}</p>
              <p><strong>Guests:</strong> {partySize}</p>
              <p><strong>Table:</strong> {tables.find(t => t.id === selectedTable).number}</p>
              <p><strong>Name:</strong> {customerName}</p>
            </div>
            
            <div className="confirmation-notes">
              <p>A confirmation email has been sent to {customerEmail}</p>
              <p>You can cancel or modify your reservation by contacting us at least 2 hours before your reservation time.</p>
            </div>
          </div>
          
          <button className="new-reservation-btn" onClick={handleNewReservation}>
            Make Another Reservation
          </button>
        </div>
      )}
    </div>
  );
}

export default Reservation;