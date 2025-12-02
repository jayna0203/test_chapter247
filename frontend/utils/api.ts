const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface ApiError {
  error: string;
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });
  } catch (fetchError: any) {
    // Network error - backend might not be running
    if (fetchError.message.includes('Failed to fetch') || fetchError.message.includes('NetworkError')) {
      throw new Error('Cannot connect to server. Please make sure the backend is running on http://localhost:5000');
    }
    throw new Error(fetchError.message || 'Network error occurred');
  }

  if (!response.ok) {
    let errorMessage = 'An error occurred';
    try {
      const error: ApiError = await response.json();
      errorMessage = error.error || `HTTP error! status: ${response.status}`;
    } catch {
      // If response is not JSON, use status text
      errorMessage = response.statusText || `HTTP error! status: ${response.status}`;
    }
    throw new Error(errorMessage);
  }

  return response.json();
}

export const api = {
  // Auth
  register: (data: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  }) => apiRequest<{ user: any; token: string }>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  login: (username: string, password: string) => apiRequest<{ user: any; token: string }>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  }),

  getMe: () => apiRequest<any>('/auth/me'),

  // Todos
  getTodos: () => apiRequest<{ todos: any[] }>('/todos'),
  
  getTodo: (id: number) => apiRequest<any>(`/todos/${id}`),
  
  createTodo: (data: { todo: string; completed?: boolean }) => apiRequest<any>('/todos', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  updateTodo: (id: number, data: { todo?: string; completed?: boolean }) => apiRequest<any>(`/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  deleteTodo: (id: number) => apiRequest<{ message: string }>(`/todos/${id}`, {
    method: 'DELETE',
  }),
};

