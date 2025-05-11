
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="fashion-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            AI Fashion Stylist
          </span>
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Home
          </Link>
          {user && (
            <>
              <Link to="/profile" className="font-medium hover:text-primary transition-colors">
                My Profile
              </Link>
              <Link to="/outfits" className="font-medium hover:text-primary transition-colors">
                Outfits
              </Link>
            </>
          )}
          <Link to="/pricing" className="font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">{user.name || user.email}</span>
              </div>
              <button 
                onClick={logout}
                className="bg-secondary text-foreground px-6 py-2 rounded-md hover:bg-secondary/80 transition-colors"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link 
                to="/login" 
                className="font-medium hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {user && (
                <>
                  <Link 
                    to="/profile" 
                    className="font-medium hover:text-primary transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    to="/outfits" 
                    className="font-medium hover:text-primary transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Outfits
                  </Link>
                </>
              )}
              
              <Link 
                to="/pricing" 
                className="font-medium hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              {user ? (
                <>
                  <div className="flex items-center space-x-2 p-2">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium text-sm">{user.name || user.email}</span>
                  </div>
                  <button 
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-secondary text-foreground px-6 py-2 rounded-md hover:bg-secondary/80 transition-colors"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="font-medium hover:text-primary transition-colors p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
