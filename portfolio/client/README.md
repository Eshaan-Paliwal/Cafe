# Frontend README

## Setup and Installation

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Project Structure

### Components
- **Navigation.js** - Top navigation bar with links
- **Footer.js** - Footer with social links
- **ProjectCard.js** - Displays featured projects
- **ContactForm.js** - Contact form for submissions

### Pages
- **Home.js** - Homepage with hero section and featured projects
- **Projects.js** - Page displaying all projects
- **Contact.js** - Contact page with contact form

### API
- **api.js** - Centralized axios API client with all endpoint functions

### Styles
- **index.css** - Global styles
- **App.css** - App-level styles
- **Navigation.css** - Navigation bar styles
- **Footer.css** - Footer styles
- **ProjectCard.css** - Project card styles
- **ContactForm.css** - Contact form styles
- **Home.css** - Home page styles
- **Projects.css** - Projects page styles
- **Contact.css** - Contact page styles

## Features

### Pages
1. **Home** - Welcome section with featured projects
2. **Projects** - Display all projects in a grid
3. **Contact** - Contact form for visitors

### Components
- Responsive navigation with links
- Project showcase with technology tags
- Contact form with validation
- Sticky navigation
- Footer with social links

## Customization

### Update Portfolio Information
Edit the respective files:
- Social links in `Footer.js`
- Hero content in `pages/Home.js`
- API endpoints in `api.js` if backend URL changes

### Styling
All styles are in the `styles/` directory using CSS files.
Easily customize colors, fonts, and layout.

## Environment Variables
Create a `.env` file (optional):
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Deployment
1. Build the project: `npm run build`
2. The `build/` folder is ready for deployment
3. Deploy to services like Vercel, Netlify, or GitHub Pages
