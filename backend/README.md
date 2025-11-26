# Todo App Backend API

Express.js backend API for the Todo Task Management application.

## Features

- User registration and authentication
- JWT-based authentication
- Password hashing with bcrypt
- CRUD operations for todos
- JSON file-based storage (no database required)
- CORS enabled for frontend integration

## Installation

```bash
cd backend
npm install
```

## Running the Server

### Development (with auto-reload)
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Todos

- `GET /api/todos` - Get all todos for current user (protected)
- `GET /api/todos/:id` - Get single todo (protected)
- `POST /api/todos` - Create new todo (protected)
- `PUT /api/todos/:id` - Update todo (protected)
- `DELETE /api/todos/:id` - Delete todo (protected)

### Health Check

- `GET /api/health` - Check API status

## Environment Variables

Create a `.env` file:

```
PORT=5000
JWT_SECRET=your-super-secret-jwt-key
```

## Data Storage

Data is stored in JSON files in the `data/` directory:
- `data/users.json` - User accounts
- `data/todos.json` - Todo items

**Note:** The `data/` directory is gitignored. Data persists locally but is not committed to version control.

## Authentication

All protected routes require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

Tokens expire after 24 hours.

## Example Requests

### Register
```bash
POST /api/auth/register
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "password": "password123"
}
```

### Login
```bash
POST /api/auth/login
{
  "username": "johndoe",
  "password": "password123"
}
```

### Create Todo
```bash
POST /api/todos
Authorization: Bearer <token>
{
  "todo": "Complete the project",
  "completed": false
}
```

