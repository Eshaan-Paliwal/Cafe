# Deploying Portfolio to Vercel

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- GitHub repository with your code pushed
- MongoDB Atlas account and connection string
- Git installed locally

## Deployment Steps

### 1. Connect Repository to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Import"

### 2. Configure Environment Variables
In the Vercel project settings:

**For Production:**
1. Go to Settings → Environment Variables
2. Add the following variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: A secure random string for JWT encryption
   - `REACT_APP_API_URL`: Will be auto-generated (e.g., `https://your-domain.vercel.app/api`)

### 3. Deployment Configuration
Your `vercel.json` is already set up to:
- Build and deploy the React frontend
- Deploy the Node.js backend as Serverless Functions
- Route `/api/*` requests to your backend
- Serve all other requests as static frontend files

### 4. Deploy
1. After configuring environment variables, click "Deploy"
2. Vercel will automatically build and deploy your application
3. Once complete, your app will be live at `https://your-domain.vercel.app`

## Post-Deployment

### Update API URL in Client
After deployment, set the correct API URL in Vercel environment:
```
REACT_APP_API_URL=https://your-domain.vercel.app/api
```

### Redeploy if Needed
```bash
vercel --prod
```

## Troubleshooting

### API Calls Failing
- Verify `REACT_APP_API_URL` environment variable is set correctly
- Check CORS is enabled in `server.js` (already configured)
- Ensure MongoDB connection string is correct

### Build Errors
- Clear cache: Go to Settings → Git → Redeploy with —yes flag
- Check that all environment variables are set
- Verify `node_modules` and `build/` folders are in `.gitignore`

### Database Connection Issues
- Verify MongoDB Atlas IP whitelist includes Vercel servers (allow 0.0.0.0/0)
- Test connection string locally first
- Check MongoDB Atlas network access settings

## Local Development
For local testing before deployment:
```bash
# Install dependencies
cd server && npm install
cd ../client && npm install

# Create .env files
# server/.env with MONGODB_URI and JWT_SECRET
# client/.env with REACT_APP_API_URL=http://localhost:5000/api

# Run server
cd server && npm run dev

# Run client (in new terminal)
cd client && npm start
```

## CI/CD Pipeline
Vercel automatically deploys on:
- Push to main branch
- Pull requests (preview deployment)
- Manual redeployment from dashboard
