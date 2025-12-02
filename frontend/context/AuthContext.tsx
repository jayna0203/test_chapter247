'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/utils/api';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const data = await api.login(username, password);
      
      setToken(data.token);
      setUser({
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        image: data.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.firstName + ' ' + data.user.lastName)}&background=random`,
      });
      setIsAuthenticated(true);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        image: data.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.firstName + ' ' + data.user.lastName)}&background=random`,
      }));

      router.push('/dashboard');
    } catch (error: any) {
      throw new Error(error.message || 'Invalid credentials');
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const signup = async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  }) => {
    try {
      const data = await api.register(userData);
      
      setToken(data.token);
      setUser({
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        image: data.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.firstName + ' ' + data.user.lastName)}&background=random`,
      });
      setIsAuthenticated(true);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        image: data.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.user.firstName + ' ' + data.user.lastName)}&background=random`,
      }));

      router.push('/dashboard');
    } catch (error: any) {
      throw new Error(error.message || 'Signup failed');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

