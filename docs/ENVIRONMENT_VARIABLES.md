# Environment Variables Configuration

## Backend Environment Variables

Create a file named `.env` in the `backend/` folder with the following:

```env
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### Variables Explained

- **PORT**: Server port (default: 5000)
- **JWT_SECRET**: Secret key for JWT token signing (IMPORTANT: Use a strong random string in production)

### Example .env file:

```env
PORT=5000
JWT_SECRET=8f3a9b2c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b
```

**Note:** If you don't create `.env`, the server will use default values.

## Frontend Environment Variables

Create a file named `.env.local` in the `frontend/` folder with the following:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Variables Explained

- **NEXT_PUBLIC_API_URL**: Backend API URL (default: http://localhost:5000/api)

### Example .env.local file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**For Production:**

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
```

**Note:** If you don't create `.env.local`, it defaults to `http://localhost:5000/api`.

## How to Create .env Files

### Windows PowerShell

**Backend:**

```powershell
cd backend
@"
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
"@ | Out-File -FilePath .env -Encoding utf8
```

**Frontend:**

```powershell
cd frontend
@"
NEXT_PUBLIC_API_URL=http://localhost:5000/api
"@ | Out-File -FilePath .env.local -Encoding utf8
```

### Manual Creation

1. Create a new file named `.env` in `backend/` folder
2. Add the variables as shown above
3. Create a new file named `.env.local` in `frontend/` folder
4. Add the variables as shown above

## Security Notes

⚠️ **Important:**

- Never commit `.env` or `.env.local` files to git
- These files are already in `.gitignore`
- Use strong, random JWT_SECRET in production
- Don't share your JWT_SECRET publicly

## Default Values

If environment variables are not set, the application uses:

**Backend:**

- PORT: 5000
- JWT_SECRET: 'your-secret-key-change-in-production'

**Frontend:**

- NEXT_PUBLIC_API_URL: http://localhost:5000/api

These defaults work for local development but should be changed for production.
