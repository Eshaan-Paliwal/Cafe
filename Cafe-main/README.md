# Coffee Shop Web Application

A modern, responsive web application for a coffee shop built with React, featuring a beautiful UI and smooth animations.

## Features

### User Authentication
- Secure login and registration system
- Profile management with image upload
- Persistent authentication using localStorage
- Protected routes for authenticated users

### Menu Management
- Interactive menu display with categories
- Real-time cart functionality
- Item customization options
- Smooth animations and transitions

### Order System
- Shopping cart with item management
- Order history tracking
- Order status updates
- Reorder functionality

### Profile Management
- User profile information management
- Profile picture upload
- Order history view
- Account settings

## Components

### Authentication
- `Login.jsx`: User login form with validation
- `Register.jsx`: New user registration
- `AuthContext.jsx`: Authentication state management

### Menu
- `Menu.jsx`: Main menu display
- `MenuItem.jsx`: Individual menu item card
- `Cart.jsx`: Shopping cart management

### Profile
- `Profile.jsx`: User profile management
- `OrderHistory.jsx`: Order history display
- `ProfileImage.jsx`: Profile picture management

### Layout
- `Header.jsx`: Navigation and user menu
- `Footer.jsx`: Site footer with information
- `Layout.jsx`: Main layout wrapper

## Styling
- Modern, responsive design
- Dark theme with purple accent color (#bb86fc)
- Smooth animations using Framer Motion
- Mobile-first approach

## Technologies Used
- React.js
- React Router for navigation
- Framer Motion for animations
- React Icons for iconography
- CSS3 for styling
- LocalStorage for data persistence

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure
```
src/
├── components/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── menu/
│   │   ├── Menu.jsx
│   │   └── MenuItem.jsx
│   ├── profile/
│   │   ├── Profile.jsx
│   │   └── OrderHistory.jsx
│   └── layout/
│       ├── Header.jsx
│       └── Footer.jsx
├── context/
│   └── AuthContext.jsx
├── styles/
│   └── global.css
└── App.jsx
```

## Features in Detail

### Authentication System
- Email and password validation
- Secure password storage
- Session persistence
- Protected routes

### Menu System
- Category-based navigation
- Item details and customization
- Real-time price calculation
- Cart integration

### Order Management
- Order tracking
- Status updates
- Order history
- Reorder functionality

### Profile Management
- Personal information management
- Profile picture upload
- Order history view
- Account settings

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.
