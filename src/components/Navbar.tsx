
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Link to="/profile" className="font-medium hover:text-primary transition-colors">
            My Profile
          </Link>
          <Link to="/outfits" className="font-medium hover:text-primary transition-colors">
            Outfits
          </Link>
          <Link to="/pricing" className="font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Sign In
          </button>
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
              <Link 
                to="/pricing" 
                className="font-medium hover:text-primary transition-colors p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <button 
                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
