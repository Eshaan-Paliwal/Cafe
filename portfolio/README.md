# Portfolio Website - Full Stack MERN

A complete portfolio website built with React (frontend), Express.js (backend), and MongoDB (database).

## Project Structure

```
portfolio/
├── server/                  # Backend - Node.js/Express
│   ├── config/             # Configuration files
│   │   └── db.js          # MongoDB connection
│   ├── models/            # MongoDB models
│   │   ├── Project.js     # Project schema
│   │   ├── Contact.js     # Contact message schema
│   │   └── User.js        # User schema
│   ├── routes/            # API routes
│   │   ├── projects.js    # Projects endpoints
│   │   └── contact.js     # Contact endpoints
│   ├── middleware/        # Middleware (for future auth)
│   ├── package.json       # Server dependencies
│   ├── .env              # Environment variables
│   └── server.js         # Main server file
│
└── client/                 # Frontend - React
    ├── public/            # Static files
    ├── src/
    │   ├── components/    # React components
    │   │   ├── Navigation.js
    │   │   ├── Footer.js
    │   │   ├── ProjectCard.js
    │   │   └── ContactForm.js
    │   ├── pages/        # Page components
    │   │   ├── Home.js
    │   │   ├── Projects.js
    │   │   └── Contact.js
    │   ├── styles/       # CSS files
    │   ├── api.js        # API client (axios)
    ├── package.json      # Frontend dependencies
    └── index.js          # React entry point
```

## Features

- **Frontend**: React with React Router for navigation
- **Backend**: Express.js REST API
- **Database**: MongoDB for data persistence
- **Responsive Design**: Mobile-friendly UI
- **Project Showcase**: Display featured and all projects
- **Contact Form**: Submit contact messages
- **Modern UI**: Clean and professional interface

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PATCH /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PATCH /api/contact/:id` - Mark message as read (admin)
- `DELETE /api/contact/:id` - Delete message (admin)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure `.env` file with your MongoDB URI and other settings

4. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

## Technologies Used

### Frontend
- React 18
- React Router v6
- Axios (HTTP client)
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs (password hashing)
- jsonwebtoken (authentication)

### Tools
- npm (package manager)
- nodemon (development)

## Future Enhancements

- User authentication and admin panel
- Project filtering and search
- Blog functionality
- Analytics integration
- Email notifications for contact forms
- Image optimization and CDN integration
- SEO optimization
- Dark mode toggle

## Running the Application

1. **Terminal 1 - Backend**:
```bash
cd server
npm run dev
```

2. **Terminal 2 - Frontend**:
```bash
cd client
npm start
```

Visit `http://localhost:3000` in your browser.

## License

ISC
