
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Define types for our auth context
type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

// Create context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock database of users (in a real app this would be in a database)
const mockUsers: Record<string, { id: string; email: string; password: string; name: string }> = {
  'user1@example.com': {
    id: 'user1',
    email: 'user1@example.com',
    password: 'password123',
    name: 'Demo User'
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user data', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const lowerEmail = email.toLowerCase();
      const user = mockUsers[lowerEmail];
      
      if (!user || user.password !== password) {
        throw new Error('Invalid email or password');
      }
      
      // Create a user object without the password
      const authenticatedUser = {
        id: user.id,
        email: user.email,
        name: user.name
      };
      
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      toast.success('Successfully logged in!');
      navigate('/profile');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const lowerEmail = email.toLowerCase();
      
      if (mockUsers[lowerEmail]) {
        throw new Error('Email already in use');
      }
      
      // Create new user
      const newUser = {
        id: `user${Object.keys(mockUsers).length + 1}`,
        email: lowerEmail,
        password,
        name
      };
      
      // Add to mock DB (in a real app, this would be an API call)
      mockUsers[lowerEmail] = newUser;
      
      // Create a user object without the password
      const authenticatedUser = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
      
      setUser(authenticatedUser);
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
      toast.success('Account created successfully!');
      navigate('/profile');
    } catch (error: any) {
      toast.error(error.message || 'Signup failed');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.info('You have been logged out');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
