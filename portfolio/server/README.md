# Backend README

## Setup and Installation

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the server directory:

```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

### Run Development Server
```bash
npm run dev
```

### Run Production Server
```bash
npm start
```

## API Documentation

### Base URL
`http://localhost:5000/api`

### Projects Endpoints

**Get All Projects**
- Method: GET
- URL: `/projects`
- Response: Array of project objects

**Get Featured Projects**
- Method: GET
- URL: `/projects/featured`
- Response: Array of featured project objects

**Get Single Project**
- Method: GET
- URL: `/projects/:id`
- Response: Single project object

**Create Project**
- Method: POST
- URL: `/projects`
- Body:
```json
{
  "title": "Project Title",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "imageUrl": "https://example.com/image.jpg",
  "projectUrl": "https://project.example.com",
  "githubUrl": "https://github.com/user/project",
  "featured": true
}
```

### Contact Endpoints

**Submit Contact Form**
- Method: POST
- URL: `/contact`
- Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

**Get All Messages**
- Method: GET
- URL: `/contact`
- Response: Array of contact messages

## Database Models

### Project Model
- title (String, required)
- description (String, required)
- technologies (Array of Strings)
- imageUrl (String)
- projectUrl (String)
- githubUrl (String)
- featured (Boolean)
- timestamps (createdAt, updatedAt)

### Contact Model
- name (String, required)
- email (String, required)
- subject (String, required)
- message (String, required)
- read (Boolean)
- timestamps (createdAt, updatedAt)

### User Model
- name (String, required)
- email (String, required, unique)
- password (String, required, hashed)
- role (String, enum: admin/user)
- timestamps (createdAt, updatedAt)
